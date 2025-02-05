import { CreatureType, Size, ConditionType, DamageType } from "../models";
import { rollDice } from "../utils/dice";
import { BaseMonster } from "./base/baseMonster";

// TODO - passive perception
// TODO 

export class CornOoze extends BaseMonster {
    constructor(hitDice: string) {
        let hp = rollDice(hitDice);
        let abilities = { strength: 15, dexterity: 6, constitution: 14, intelligence: 2, wisdom: 6, charisma: 1 };
        super({
            name: "Corn Ooze",
            // species: "Ooze",
            type: [CreatureType.Ooze],
            size: Size.Large,
            alignment: "Unaligned",
            ac: 8,
            hp: hp,
            speed: { walk: 20 },
            abilities: abilities,
            skills: [],
            senses: ["Blindsight 30ft"],
            languages: [],
            cr: 3,
            traits: [{ name: "Amorphous", description: "Can move through small spaces without squeezing." }],
            actions: [{ name: "Slam", description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage." }],
            bonusActions: [],
            reactions: [],
            legendaryActions: [],
            lairActions: [],
            spells: [],
            damageImmunities: [DamageType.Lightning, DamageType.Slashing],
            damageResistances: [DamageType.Acid],
            damageVulnerabilities: [],
            conditionImmunities: [ConditionType.Blinded, ConditionType.Charmed, ConditionType.Deafened, ConditionType.Exhaustion, ConditionType.Frightened, ConditionType.Prone]
        });
    }

    attackTarget(target: BaseMonster): void {
        console.log(`${this.name} engulfs ${target.name} in sticky corn sludge!`);
        super.attackTarget(target);
    }
}