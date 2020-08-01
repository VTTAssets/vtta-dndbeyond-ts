/**
 * Finds a folder in the folder collection, specified by name, entityType and parent
 * @param options Folder search options (name, entityType, parent; color is disregarded)
 * @returns The Folder, if it does exists, or undefined
 */
const getFolder = (options: FolderCreationOptions): Folder | undefined => {
  return game.folder.entities.find(
    (folder) => folder.type === options.entityType && folder.name === options.name && folder.parent === options.parent
  );
};

export default getFolder;
