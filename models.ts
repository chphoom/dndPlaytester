export interface PlayerCharacter {
    name: string;
    class: Class;
    background: Background;
    species: Species;
    abilities: Abilities;
    equipment: Equipment;
} //end interface PlayerCharacter

export interface Class {
    name: string;
    traits: string[];
} //end interface Class

export interface Background {
    name: string;
    traits: string[];
} //end interface Background

export interface Species {
    name: string;
    traits: Trait[];
    type: CreatureType[];
    languages: Language[];
    size: Size;
    speed: Speed;
    darkvision: boolean;
    feyAncestry: boolean;
    skillProficiencies: Skill[];
    trance: boolean;
} //end interface Species

export interface Abilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
} //end interface Abilities

export interface Equipment {
    armor: Armor;
    weapon: Weapon[];
    shield: boolean;
    tools: Tool[];
    pack: Pack;
} //end interface Equipment

export enum CreatureType {
    Aberration = "Aberration",
    Beast = "Beast",
    Celestial = "Celestial",
    Construct = "Construct",
    Dragon = "Dragon",
    Elemental = "Elemental",
    Fey = "Fey",
    Fiend = "Fiend",
    Giant = "Giant",
    Humanoid = "Humanoid",
    Monstrosity = "Monstrosity",
    Ooze = "Ooze",
    Plant = "Plant",
    Undead = "Undead"
}

export enum Language {
    Common = "Common",
    Dwarvish = "Dwarvish",
    Elvish = "Elvish",
    Giant = "Giant",
    Gnomish = "Gnomish",
    Goblin = "Goblin",
    Halfling = "Halfling",
    Orc = "Orc",
    Sylvan = "Sylvan",
    Undercommon = "Undercommon",
    Draconic = "Draconic",
    Infernal = "Infernal",
    Abyssal = "Abyssal",
    Celestial = "Celestial",
    Primordial = "Primordial",
    Terran = "Terran",
    Aquan = "Aquan",
    Ignan = "Ignan",
    Auran = "Auran",
    DeepSpeech = "Deep Speech",
    Telepathy = "Telepathy"
}

export enum Size {
    Tiny = "Tiny",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    Huge = "Huge",
    Gargantuan = "Gargantuan"
}

export interface Speed {
    walk: number;
    burrow?: number;
    climb?: number;
    fly?: number;
    swim?: number;
} //end interface Speed

export enum Skill {
    Acrobatics = "Acrobatics",
    AnimalHandling = "Animal Handling",
    Arcana = "Arcana",
    Athletics = "Athletics",
    Deception = "Deception",
    History = "History",
    Insight = "Insight",
    Intimidation = "Intimidation",
    Investigation = "Investigation",
    Medicine = "Medicine",
    Nature = "Nature",
    Perception = "Perception",
    Performance = "Performance",
    Persuasion = "Persuasion",
    Religion = "Religion",
    SleightOfHand = "Sleight of Hand",
    Stealth = "Stealth",
    Survival = "Survival"
}

export interface Trait {
    name: string;
    description: string;
} //end interface Trait

export interface Armor {
    name: string;
    type: ArmorType;
    ac: number;
    strength: number;
    stealth: boolean;
} //end interface Armor

export enum ArmorType {
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    Shield = "Shield"
}

export interface Weapon {
    name: string;
    type: WeaponType;
    damage: DamageType;
    properties: string[];
} //end interface Weapon

export enum WeaponType {
    Simple = "Simple",
    Martial = "Martial",
    Ranged = "Ranged",
    Melee = "Melee"
}

export enum Tool {
    Artisan = "Artisan",
    DisguiseKit = "Disguise Kit",
    ForgeryKit = "Forgery Kit",
    GamingSet = "Gaming Set",
    HerbalismKit = "Herbalism Kit",
    MusicalInstrument = "Musical Instrument",
    NavigatorTools = "Navigator's Tools",
}

export interface Pack {
    name: string;
    items: Item[];
} //end interface Pack

export interface Item {
    name: string;
    quantity: number;
    weight: number;
    cost: number;
    equipped: boolean;
    armor?: Armor;
    weapon?: Weapon;
    tool?: Tool;
} //end interface Item

export enum DamageType {
    Acid = "Acid",
    Bludgeoning = "Bludgeoning",
    Cold = "Cold",
    Fire = "Fire",
    Force = "Force",
    Lightning = "Lightning",
    Necrotic = "Necrotic",
    Piercing = "Piercing",
    Poison = "Poison",
    Psychic = "Psychic",
    Radiant = "Radiant",
    Slashing = "Slashing",
    Thunder = "Thunder"
}
