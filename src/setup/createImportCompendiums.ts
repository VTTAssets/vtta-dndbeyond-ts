import { IMPORT_COMPENDIA } from "../config";
import getCompendium from "../utility/compendium/getCompendium";

const createImportCompendiums = () => {
  return new Promise((resolve, reject) => {
    const creationResults = IMPORT_COMPENDIA.map((options) => {
      let compendium = getCompendium(options);
      if (compendium === undefined) {
        return Compendium.create(options);
      } else {
        return Promise.resolve(compendium);
      }
    });

    Promise.all(creationResults)
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default createImportCompendiums;
