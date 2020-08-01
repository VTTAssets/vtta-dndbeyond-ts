export const COLOR_DNDBEYOND_RED = "#98020a";

export const IMPORT_COMPENDIA: CompendiumDetail[] = [
  {
    label: "My DDB Spells",
    name: "entity-spell-compendium",
    entityType: "Item",
    package: "world",
    types: ["spell"],
  },
  {
    label: "My DDB Items",
    name: "entity-item-compendium",
    entityType: "Item",
    package: "world",
    types: ["weapon", "equipment", "consumable", "tool", "loot", "class", "spell", "feat", "backpack"],
  },
  {
    label: "My DDB Monsters",
    name: "entity-monster-compendium",
    entityType: "Actor",
    package: "world",
    types: ["npc"],
  },
];
