import { Abilities, Action, ChallengeRating, ConditionType, CreatureType, DamageType, LairAction, Language, LegendaryAction, Monster, Reaction, Size, Skill, Species, Speed, Spell, Trait } from "../../models";


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
    reactions: Reaction[];
    legendaryActions: LegendaryAction[];
    lairActions: LairAction[];
    spells: Spell[];
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
        this.cr = data.cr;
        this.traits = data.traits;
        this.actions = data.actions;
        this.bonusActions = data.bonusActions;
        this.reactions = data.reactions;
        this.legendaryActions = data.legendaryActions;
        this.lairActions = data.lairActions;
        this.spells = data.spells;
        this.damageImmunities = data.damageImmunities;
        this.damageResistances = data.damageResistances;
        this.damageVulnerabilities = data.damageVulnerabilities;
        this.conditionImmunities = data.conditionImmunities
    }

    attackTarget(target: BaseMonster): void {
        if (this.actions.length === 0) {
            console.log(`${this.name} has no actions to attack with.`);
            return;
        }

        const attack = this.actions[0]; // Default to the first action
        console.log(`${this.name} uses ${attack.name} against ${target.name}!`);
        // Additional attack logic can be implemented here
    }
}