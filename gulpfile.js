const typescript = require("typescript");
const path = require("path");

const gulp = require("gulp");

const ts = require("gulp-typescript");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const eslint = require("gulp-eslint");

/**
 * TypeScript transformers
 * @returns {typescript.TransformerFactory<typescript.SourceFile>}
 */
function createTransformer() {
  /**
   * @param {typescript.Node} node
   */
  function shouldMutateModuleSpecifier(node) {
    if (!typescript.isImportDeclaration(node) && !typescript.isExportDeclaration(node)) return false;
    if (node.moduleSpecifier === undefined) return false;
    if (!typescript.isStringLiteral(node.moduleSpecifier)) return false;
    if (!node.moduleSpecifier.text.startsWith("./") && !node.moduleSpecifier.text.startsWith("../")) return false;
    if (path.extname(node.moduleSpecifier.text) !== "") return false;
    return true;
  }

  /**
   * Transforms import/export declarations to append `.js` extension
   * @param {typescript.TransformationContext} context
   */
  function importTransformer(context) {
    return (node) => {
      /**
       * @param {typescript.Node} node
       */
      function visitor(node) {
        if (shouldMutateModuleSpecifier(node)) {
          if (typescript.isImportDeclaration(node)) {
            const newModuleSpecifier = typescript.createLiteral(`${node.moduleSpecifier.text}.js`);
            return typescript.updateImportDeclaration(
              node,
              node.decorators,
              node.modifiers,
              node.importClause,
              newModuleSpecifier
            );
          } else if (typescript.isExportDeclaration(node)) {
            const newModuleSpecifier = typescript.createLiteral(`${node.moduleSpecifier.text}.js`);
            return typescript.updateExportDeclaration(
              node,
              node.decorators,
              node.modifiers,
              node.exportClause,
              newModuleSpecifier
            );
          }
        }
        return typescript.visitEachChild(node, visitor, context);
      }

      return typescript.visitNode(node, visitor);
    };
  }

  return importTransformer;
}

const tsConfig = ts.createProject("tsconfig.json", {
  noImplicitAny: true,
  declaration: true,

  getCustomTransformers: (_program) => ({
    after: [createTransformer()],
  }),
});

/**
 * Linting
 */
const lint = () => {
  return gulp
    .src(["**/*.ts", "!node_modules/**"])
    .pipe(
      eslint({
        //    configFile: __dirname + "/.eslintrc.json",
      })
    )
    .pipe(eslint.formatEach("visualstudio", process.stderr))
    .pipe(eslint.failAfterError());
};

/**
 * Compiling
 */
const compileScript = () => {
  return gulp.src("src/**/*.ts").pipe(tsConfig()).pipe(gulp.dest("dist"));
};

const compileStyle = () => {
  return gulp
    .src("src/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("dist/style"));
};

/**
 * Watching
 */
const watchScript = () => {
  gulp.watch("src/**/*.ts", { ignoreInitial: false }, compileScript);
};
const watchStyle = () => {
  gulp.watch("src/**/*.sass", { ignoreInitial: false }, compileStyle);
};

const compile = gulp.parallel(compileScript, compileStyle);
compile.description = "compile all sources";

const watch = gulp.parallel(watchScript, watchStyle);
watch.description = "watch for changes to all source";

const build = gulp.series(lint, compile);
build.description = "lint and compile";

gulp.task("watch", watch);
gulp.task("build", build);
