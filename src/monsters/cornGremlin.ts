import { BaseMonster } from "./base/baseMonster";
import { CreatureType, DamageType, Language, Size } from "../models";
import { rollDice } from "../utils/dice";
import * as Actions from "../actions";

export class CornGremlin extends BaseMonster {
    constructor() {
        let hp = rollDice("2d6");
        super({
            name: "Corn Gremlin",
            // species: "Gremlin",
            type: [CreatureType.Fey],
            size: Size.Small,
            alignment: "Neutral Evil",
            ac: 15,
            hp: hp,
            speed: { walk: 30, fly: 30 },
            abilities: { strength: 8, dexterity: 14, constitution: 10, intelligence: 10, wisdom: 8, charisma: 8 },
            skills: [],
            senses: ["Darkvision 60ft"],
            languages: [Language.Common],
            cr: 1/4,
            traits: [],
            actions: [
                new Actions.AttackAction({ 
                    name: "Razor Leaf", 
                    description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
                    toHit: 4,
                    reach: 5,
                    targets: 1,
                    targeted: [],
                    damage: "1d6",
                    damageType: DamageType.Slashing,
                    damageBonus: 2})
            ],
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