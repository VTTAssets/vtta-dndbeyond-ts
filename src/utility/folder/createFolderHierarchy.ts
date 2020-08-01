import getOrCreateFolder from "./getOrCreateFolder";

/**
 * Folder-related utility functions
 */

/**
 * Creates a hierarchy of folders
 * @param {FolderHierarchyCreationOptions} options Hierarchy creation options (names[], entityType, color)
 * @returns {Promise<Folder>} The folder highest in the hierarchy, ie. the last entry in the names-array
 * @throws {RangeError} If the desired folder hierarchy exceeds the maximum folder depth dictated by Foundry
 */
export default async (options: FolderHierarchyCreationOptions): Promise<Folder> => {
  let parentFolderId = "";
  let folder: Folder | undefined;

  if (options.names.length > CONST.FOLDER_MAX_DEPTH)
    throw new RangeError(
      "Folder hierarchy depth of " + options.names.length + " exceeds folder maximum depth of " + CONST.FOLDER_MAX_DEPTH
    );
  do {
    const folderName = options.names.shift() || "";
    const parent = parentFolderId.length ? parentFolderId : null;
    const folderCreationOptions: FolderCreationOptions = Object.assign({ name: folderName, parent: parent }, options);

    // Folder creation is based on the previously created folder, no async operation possible
    folder = await getOrCreateFolder(folderCreationOptions); // eslint-disable-line no-await-in-loop
    parentFolderId = folder._id;
  } while (options.names.length > 0);

  return folder;
};
