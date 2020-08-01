import { prefixWorldName } from "../string/index";

/**
 * Finds a compendium, specified by name and entityType
 * @param options Compendium search options
 * @returns The Folder, if it does exists, or undefined
 */
const getCompendium = (options: CompendiumDetail): Compendium | undefined => {
  options.name = prefixWorldName(options.name);
  return game.packs.get(`world.${options.name}`);
};

export default getCompendium;
