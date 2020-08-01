import { getCompendium } from "./index";
import { queryCompendiumEntity, queryCompendiumEntities } from "./index";

/**
 * Retrieves the first entity matching the normalized entity name
 * @param {string} entityName Name of the entity to retrieve
 * @param {CompendiumDetail} compendiumDetail Compendium to search through
 * @returns A Promise to the found entity or a  null value
 */
const getCompendiumEntity = async (entityName: string, compendiumDetail: CompendiumDetail): Promise<Entity | null> => {
  const compendium = getCompendium(compendiumDetail);
  if (compendium === undefined) throw new Error(`Compendium ${compendiumDetail.label} not found.`);

  const lookup = await queryCompendiumEntity(entityName, compendiumDetail);
  if (lookup !== undefined) {
    return compendium.getEntity(lookup._id);
  }
  return Promise.resolve(null);
};

/**
 * Retrieves all entities matching the list of normalized entity names
 * @param {string[]} entityNames Names of the entity to retrieve
 * @param {CompendiumDetail} compendiumDetail Compendium to search through
 * @returns An array of Promises to the found entities or null values
 */
const getCompendiumEntities = async (entityNames: string[], compendiumDetail: CompendiumDetail): Promise<Entity[]> => {
  const compendium = getCompendium(compendiumDetail);
  if (compendium === undefined) throw new Error(`Compendium ${compendiumDetail.label} not found.`);

  // lookup
  const lookup = await queryCompendiumEntities(entityNames, compendiumDetail);
  return Promise.all(lookup.map((entity) => compendium.getEntity(entity._id)));
};

export { getCompendiumEntities, getCompendiumEntity };
