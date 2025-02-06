import { BaseMonster } from "./base/baseMonster";
import { CreatureType, DamageType, Language, Size } from "../models";

export class CornGremlin extends BaseMonster {
    constructor() {
        super({
            name: "Corn Gremlin",
            // species: "Gremlin",
            type: [CreatureType.Fey],
            size: Size.Small,
            alignment: "Chaotic Neutral",
            ac: 13,
            hp: 7,
            speed: { walk: 25 },
            abilities: { strength: 6, dexterity: 16, constitution: 10, intelligence: 10, wisdom: 10, charisma: 8 },
            skills: [],
            senses: ["Darkvision 60ft"],
            languages: [Language.Common, Language.Sylvan],
            cr: 1/4,
            traits: [],
            actions: [],
            bonusActions: [],
            reactions: [],
            legendaryActions: [],
            lairActions: [],
            spellSlots: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0, level8: 0, level9: 0 },
            damageImmunities: [],
            damageResistances: [],
            damageVulnerabilities: [],
        });
    }
}//end CornGremlin