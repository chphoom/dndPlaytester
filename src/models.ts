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
    traits: Trait[];
} //end interface Class

export interface Background {
    name: string;
    traits: Trait[];
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

export interface Monster {
    name: string;
    // species: Species;
    type: CreatureType[];
    size: Size;
    alignment: string;
    ac: number;
    hp: number;
    speed: Speed;
    abilities: Abilities;
    skills: Skill[];
    senses: string[];
    languages: Language[];
    cr: ChallengeRating;
    traits: Trait[];
    actions: Action[];
    bonusActions: Action[];
    reactions: Reaction[];
    legendaryActions: LegendaryAction[];
    lairActions: LairAction[];
    spells: Spell[];
    damageImmunities: DamageType[];
    damageResistances: DamageType[];
    damageVulnerabilities: DamageType[];
    conditionImmunities: ConditionType[];
}

export interface Action {
    name: string;
    description: string;
    attack?: Attack;
    spell?: Spell;
}

export interface Reaction {
    name: string;
    description: string;
    attackBonus: number;
    damage: DamageType;
    damageBonus: number;
}

export interface LegendaryAction {
    name: string;
    description: string;
    attackBonus: number;
    damage: DamageType;
    damageBonus: number;
}

export interface LairAction {
    name: string;
    description: string;
}

export interface Spell {
    name: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    components: SpellComponents;
    duration: string;
    description: string;
}

export interface SpellComponents {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materialComponents: Item[];
} 

export enum ChallengeRating {
    Zero = 0,
    OneEighth = 0.125,
    OneQuarter = 0.25,
    OneHalf = 0.5,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12,
    Thirteen = 13,
    Fourteen = 14,
    Fifteen = 15,
    Sixteen = 16,
    Seventeen = 17,
    Eighteen = 18,
    Nineteen = 19,
    Twenty = 20,
    TwentyOne = 21,
    TwentyTwo = 22,
    TwentyThree = 23,
    TwentyFour = 24,
    TwentyFive = 25,
    TwentySix = 26,
    TwentySeven = 27,
    TwentyEight = 28,
    TwentyNine = 29,
    Thirty = 30
} //end enum ChallengeRating

export interface Attack {
    name: string;
    description: string;
    toHit: number;
    reach: number;
    range: number;
    targets: number;
    damage: DamageType;
    damageBonus: number;
} //end interface Attack

export enum ConditionType {
    Blinded = "Blinded",
    Charmed = "Charmed",
    Deafened = "Deafened",
    Frightened = "Frightened",
    Grappled = "Grappled",
    Incapacitated = "Incapacitated",
    Invisible = "Invisible",
    Paralyzed = "Paralyzed",
    Petrified = "Petrified",
    Poisoned = "Poisoned",
    Prone = "Prone",
    Restrained = "Restrained",
    Stunned = "Stunned",
    Unconscious = "Unconscious",
    Exhaustion = "Exhaustion"
} //end enum ConditionType
