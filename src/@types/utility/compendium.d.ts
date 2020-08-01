type CompendiumEntityType = "Entity" | "Actor" | "Item" | "Scene" | "JournalEntry" | "Macro" | "RollTable" | "Playlist";

interface CompendiumDetail {
  entityType: CompendiumEntityType;
  label: string;
  name: string;
  package: string;
  types: string[];
}

interface CompendiumIndexResult {
  _id: string;
  name: string;
  img: string;
}
