interface CharacterData {
  attributes: {
    death: {
      success: number;
      failure: number;
    };
    exhaustion: number;
    inspiration: number;
    ac: {
      value: number;
    };
    hp: {
      value: number;
      min: number;
      max: number;
      temp: number;
      tempmax: number;
    };
    init: {
      value: number;
      bonus: number;
    };
    speed: {
      value: string;
      special: string;
    };
    spellcasting: string;
  };
  details: {
    background: string;
    xp: {
      value: number;
      min: number;
      max: number;
    };
    trait: string;
    ideal: string;
    bond: string;
    flaw: string;
    alignment: string;
    biography: {
      value: string;
      public: string;
    };
    race: string;
  };
  resources: {
    primary: {
      value: number;
      max: number;
      sr: number;
      lr: number;
    };
    secondary: {
      value: number;
      max: number;
      sr: number;
      lr: number;
    };
    tertiary: {
      value: number;
      max: number;
      sr: number;
      lr: number;
    };
  };
  traits: {
    weaponProf: {
      value: [];
      custom: string;
    };
    armorProf: {
      value: [];
      custom: string;
    };
    toolProf: {
      value: [];
      custom: string;
    };
    size: string;
    senses: string;
    languages: {
      value: [];
      custom: string;
    };
    di: {
      value: [];
      custom: string;
    };
    dr: {
      value: [];
      custom: string;
    };
    dv: {
      value: [];
      custom: string;
    };
    ci: {
      value: [];
      custom: string;
    };
  };
  abilities: {
    str: {
      value: number;
      proficient: number;
    };
    dex: {
      value: number;
      proficient: number;
    };
    con: {
      value: number;
      proficient: number;
    };
    int: {
      value: number;
      proficient: number;
    };
    wis: {
      value: number;
      proficient: number;
    };
    cha: {
      value: number;
      proficient: number;
    };
  };
  skills: {
    acr: {
      value: number;
      ability: string;
    };
    ani: {
      value: number;
      ability: string;
    };
    arc: {
      value: number;
      ability: string;
    };
    ath: {
      value: number;
      ability: string;
    };
    dec: {
      value: number;
      ability: string;
    };
    his: {
      value: number;
      ability: string;
    };
    ins: {
      value: number;
      ability: string;
    };
    itm: {
      value: number;
      ability: string;
    };
    inv: {
      value: number;
      ability: string;
    };
    med: {
      value: number;
      ability: string;
    };
    nat: {
      value: number;
      ability: string;
    };
    prc: {
      value: number;
      ability: string;
    };
    prf: {
      value: number;
      ability: string;
    };
    per: {
      value: number;
      ability: string;
    };
    rel: {
      value: number;
      ability: string;
    };
    slt: {
      value: number;
      ability: string;
    };
    ste: {
      value: number;
      ability: string;
    };
    sur: {
      value: number;
      ability: string;
    };
  };
  currency: {
    pp: number;
    gp: number;
    ep: number;
    sp: number;
    cp: number;
  };
  spells: {
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    spellnumber: {
      value: number;
      max: number;
      override: null;
    };
    pact: {
      value: number;
      max: number;
      override: null;
    };
  };
  bonuses: {
    mwak: {
      attack: string;
      damage: string;
    };
    rwak: {
      attack: string;
      damage: string;
    };
    msak: {
      attack: string;
      damage: string;
    };
    rsak: {
      attack: string;
      damage: string;
    };
    abilities: {
      check: string;
      save: string;
      skill: string;
    };
    spell: {
      dc: string;
    };
  };
}
