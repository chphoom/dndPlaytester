import { Action, ConditionType, CreatureType, DamageType, Language, Monster, Size, Skill, Species, Speed, Spell, SpellSlots, Trait } from "../../models";
import { Abilities, AbilityScore } from "../../services/abilityService";
import { ChallengeRating } from "../../services/challengeRatingService";


export class BaseMonster implements Monster {
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
    reactions: Action[];
    legendaryActions: Action[];
    lairActions: Action[];
    spellSlots: SpellSlots;
    damageImmunities: DamageType[];
    damageResistances: DamageType[];
    damageVulnerabilities: DamageType[];
    conditionImmunities: ConditionType[];

    constructor(data: Monster) {
        this.name = data.name;
        // this.species = data.species;
        this.type = data.type;
        this.size = data.size;
        this.alignment = data.alignment;
        this.ac = data.ac;
        this.hp = data.hp;
        this.speed = data.speed;
        this.abilities = data.abilities;
        this.skills = data.skills;
        this.senses = data.senses;
        this.languages = data.languages;
        this.cr = data.cr ? data.cr : 0;
        this.traits = data.traits ? data.traits : [];
        this.actions = data.actions;
        this.bonusActions = data.bonusActions ? data.bonusActions : [];
        this.reactions = data.reactions ? data.reactions : [];
        this.legendaryActions = data.legendaryActions ? data.legendaryActions : [];
        this.lairActions = data.lairActions ? data.lairActions : [];
        this.spellSlots = data.spellSlots ? data.spellSlots : {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0, level8: 0, level9: 0 };
        this.damageImmunities = data.damageImmunities ? data.damageImmunities : [];
        this.damageResistances = data.damageResistances ? data.damageResistances : [];
        this.damageVulnerabilities = data.damageVulnerabilities ? data.damageVulnerabilities : [];
        this.conditionImmunities = data.conditionImmunities ? data.conditionImmunities : [];
    }//end constructor

    attackTarget(target: BaseMonster): void {
        if (this.actions.length === 0) {
            console.log(`${this.name} has no actions to attack with.`);
            return;
        }

        const attack = this.actions[0]; // Default to the first action
        console.log(`${this.name} uses ${attack.name} against ${target.name}!`);
        // Additional attack logic can be implemented here
    }//end function attackTarget

}//end class BaseMonster