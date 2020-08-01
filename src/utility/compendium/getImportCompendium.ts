import { IMPORT_COMPENDIA } from "../../config";
import { getCompendium } from "./index";

/**
 * Retrieves the designated import compendium for a given entity
 * @param { Actor | Item } entity The entity we are basing the import compendium to
 */
const getImportCompendium = (entity: Actor | Item): Compendium | undefined => {
  const compendiumDetail: CompendiumDetail | undefined = IMPORT_COMPENDIA.find((compendiumDetail) =>
    compendiumDetail.types.includes(entity.data.type)
  );
  if (compendiumDetail !== undefined) {
    return getCompendium(compendiumDetail);
  }
};

export default getImportCompendium;
