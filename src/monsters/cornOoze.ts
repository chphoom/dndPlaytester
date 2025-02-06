import { CreatureType, Size, ConditionType, DamageType } from "../models";
import { AbilityScore, getAbilityModifier } from "../services/abilityService";
import { rollDice } from "../utils/dice";
import { BaseMonster } from "./base/baseMonster";
import * as Traits from "../traits";
import * as Actions from "../actions";
import { CornGremlin } from "./cornGremlin";
import { getProficiencyBonus } from "../services/challengeRatingService";

export class CornOoze extends BaseMonster {
    numHitDice: number;
    hitDice: string;
    remainingHitDice: number;

    constructor(hitDice: string, HPmod: number) {
        let hp = rollDice(hitDice+HPmod);
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
                new Actions.Utalize({
                    name: "Drum of Creamed Corn",
                    quantity: 1,
                    weight: 300,
                    cost: 0,
                    equipped: false,
                    healingDice: hitDice,
                },
                "Absorption",
                "The corn ooze is made of creamed corn and tuna surprise. If it is within 5ft. of another drum of creamed corn it may consume it to roll a number of its own Hit Dice (up to half its total HD) and regains that much HP."),
                ],
            bonusActions: [],
            reactions: [
                new Actions.Summon(
                    CornGremlin,
                    "1d4",
                    new CornGremlin(),
                    "Summon Corn Gremlins",
                    "Summons 1d4 Corn Gremlins to fight for the Corn Ooze."),
            ],
            legendaryActions: [],
            lairActions: [],
            spellSlots: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0, level8: 0, level9: 0 },
            damageImmunities: [DamageType.Lightning, DamageType.Slashing],
            damageResistances: [DamageType.Acid],
            damageVulnerabilities: [],
            conditionImmunities: [ConditionType.Blinded, ConditionType.Charmed, ConditionType.Deafened, ConditionType.Exhaustion, ConditionType.Frightened, ConditionType.Prone]
        });
        const parts = hitDice.split("d"); // Splits "3d10" into ["3", "10"]
        this.numHitDice = Number(parts[0]); // Converts "3" to a number
        this.remainingHitDice = this.numHitDice;
        this.hitDice = "d" + parts[1]; // Reconstructs "d10"
    }

    attackTarget(target: BaseMonster): void {
        console.log(`${this.name} engulfs ${target.name} in sticky corn sludge!`);
        super.attackTarget(target);
    }

    absorbCorn(): void {
        console.log(`${this.name} absorbs the nearby drum of creamed corn and regains some HP.`);
    }

}