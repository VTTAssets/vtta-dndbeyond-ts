import getFolder from "./getFolder";
import createFolder from "./createFolder";

/**
 * Retrieves a folder, creates the folder if non-existent
 * @param {FolderCreationOptions} options Folder creation options (name, entityType, parent, color)
 * @returns {The requests Folder
 */
const getOrCreateFolder = async (options: FolderCreationOptions): Promise<Folder> => {
  let folder = getFolder(options);
  if (folder === undefined) {
    folder = await createFolder(options);
  }
  return folder;
};

export default getOrCreateFolder;
