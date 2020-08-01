/**
 * Creates a folder based on the options
 * @param options Folder creation options (name, entityType, parent, color)
 * @returns The created Folder
 */
const createFolder = async (options: FolderCreationOptions): Promise<Folder> => {
  return Folder.create(options);
};

export default createFolder;
