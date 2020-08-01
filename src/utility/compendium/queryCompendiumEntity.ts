import { getCompendium } from "./index";
import { normalizeString, normalizeStrings } from "../string/index";

/**
 * Queries a compendium's index for a entity specified by a name
 * @param entityName
 * @param compendiumDetail
 */
const queryCompendiumEntity = async (
  entityName: string,
  compendiumDetail: CompendiumDetail
): Promise<CompendiumIndexResult | undefined> => {
  const compendium = getCompendium(compendiumDetail);
  if (compendium === undefined) throw new Error(`Compendium ${compendiumDetail.label} not found.`);

  // normalize the entity name
  entityName = normalizeString(entityName);

  const index = await compendium.getIndex();
  return index.find((entry) => normalizeString(entry.name) === entityName);
};

/**
 * Queries a compendium's index for a entities specified by an array of strings
 * @param {string[]} entityNames
 * @param {CompendiumDetail} compendiumDetail
 */
const queryCompendiumEntities = async (
  entityNames: string[],
  compendiumDetail: CompendiumDetail
): Promise<CompendiumIndexResult[]> => {
  const compendium = getCompendium(compendiumDetail);
  if (compendium === undefined) throw new Error(`Compendium ${compendiumDetail.label} not found.`);

  // normalize the entity name
  entityNames = normalizeStrings(entityNames);

  // lookup
  const index = await compendium.getIndex();
  return index.filter((entry) => entityNames.includes(normalizeString(entry.name)));
};

export { queryCompendiumEntity, queryCompendiumEntities };
