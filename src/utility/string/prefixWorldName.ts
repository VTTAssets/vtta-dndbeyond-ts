/**
 * Prefixes a string with the current world name to avoid compendium name duplicates
 * @param {string} name Name to prefix
 */
export default (name) => {
  return `${game.world.name}-${name}`;
};
