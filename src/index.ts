import createFolderHierarchy from "./utility/folder/createFolderHierarchy";
import { COLOR_DNDBEYOND_RED } from "./config";

const createFolders = async () => {
  let folder = await createFolderHierarchy({
    names: ["Test", "My", "Folders"],
    entityType: "Item",
    color: COLOR_DNDBEYOND_RED,
  });

  console.log(folder); // eslint-disable-line no-console
};

Hooks.on("ready", () => {
  createFolders();
});

CONFIG.debug.hooks = false;
