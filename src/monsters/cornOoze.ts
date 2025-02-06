import { CreatureType, Size, ConditionType, DamageType } from "../models";
import { AbilityScore, getAbilityModifier } from "../services/abilityService";
import { rollDice } from "../utils/dice";
import { BaseMonster } from "./base/baseMonster";
import * as Traits from "../traits";
import * as Actions from "../actions";
import { getProficiencyBonus } from "../services/challengeRatingService";

// TODO - passive perception
// TODO - 

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
            speed: { walk: 10, climb: 10 },
            abilities: abilities,
            skills: [],
            senses: ["Blindsight 30ft"],
            languages: [],
            cr: 3,
            traits: [ new Traits.Amorphous, new Traits.SpiderClimb, new Traits.CorrosiveForm],
            actions: [
                new Actions.AttackAction({ 
                    name: "Pseudopod", 
                    description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage.",
                    toHit: 5,
                    reach: 5,
                    targets: 1,
                    targeted: [],
                    damage: "1d8",
                    damageType: DamageType.Bludgeoning,
                    damageBonus: 2}),
                ],
            bonusActions: [],
            reactions: [],
            legendaryActions: [],
            lairActions: [],
            spellSlots: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0, level8: 0, level9: 0 },
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