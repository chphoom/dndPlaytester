import { AbilityScore, Abilities } from './services/abilityService';
import { ChallengeRating } from './services/challengeRatingService';

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
    saveDC?: number;                   // The DC for the saving throw (e.g., 13 for Corrosive Form)
    saveType?: AbilityScore;           // The ability score used for the saving throw (e.g., CON for Corrosive Form)
    damageOnFail?: string;         // The damage dealt on a failed save (e.g., "1d8")
    damageType?: DamageType;       // The type of damage dealt on a failed save (e.g., "acid")
    // commenting out bc assuming success halves dmg damageOnSuccess?: DamageType;      // The damage dealt on a successful save (e.g., "half of 1d8 acid")
}

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
    cr?: ChallengeRating;
    traits?: Trait[];
    actions: Action[];
    bonusActions?: Action[];
    reactions?: Action[];
    legendaryActions?: Action[];
    lairActions?: Action[];
    spellSlots?: SpellSlots;
    damageImmunities?: DamageType[];
    damageResistances?: DamageType[];
    damageVulnerabilities?: DamageType[];
    conditionImmunities?: ConditionType[];
}

export interface Action {
    name: string;              // The name of the action (e.g., "Multiattack")
    description: string;       // Rules text describing the action
    attack?: Attack;           // If the action includes a weapon or melee attack
    spell?: Spell;             // If the action involves casting a spell
    recharge?: number;         // If the action has a recharge (e.g., Recharge 5-6)
    usesPerRest?: number;      // If the action has a limited number of uses per rest
    legendary?: boolean;       // If the action can be used as a legendary action
    lair?: boolean;            // If the action is a lair action
    special?: boolean;         // If the action is unique (e.g., Innate abilities)
    saveDC?: number;           // If the action requires a saving throw, specify the DC
    saveType?: AbilityScore;   // The ability used for the saving throw (e.g., STR, DEX)
    conditionsInflicted?: ConditionType[]; // Conditions applied (e.g., Grappled, Stunned)
}

export interface SpellSlots {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
    level6: number;
    level7: number;
    level8: number;
    level9: number;
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


export interface Attack {
    name: string;
    description: string;
    spell?: Spell;
    toHit: number;
    reach: number;
    range: number;
    targets: number;
    damage: string; // e.g., "1d8+3"
    damageType: DamageType;
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
