type FolderEntityType = "Actor" | "Item" | "Scene" | "JournalEntry" | "RollTable";

interface FolderHierarchyCreationOptions {
  names: string[];
  entityType: FolderEntityType;
  color: string | null;
}

interface FolderCreationOptions {
  name: string;
  parent: string | null;
  entityType: FolderEntityType;
  color: string | null;
}
