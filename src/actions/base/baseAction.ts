import { Action, ConditionType, Spell, Attack } from "../../models";
import { Abilities, AbilityScore } from "../../services/abilityService";


export class baseAction implements Action {
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

    constructor(data: Action) {
        this.name = data.name;
        this.description = data.description;
        this.attack = data.attack;
        this.spell = data.spell;
        this.recharge = data.recharge;
        this.usesPerRest = data.usesPerRest;
        this.legendary = data.legendary;
        this.lair = data.lair;
        this.special = data.special;
        this.saveDC = data.saveDC;
        this.saveType = data.saveType;
        this.conditionsInflicted = data.conditionsInflicted;
    }//end constructor
    
}//end class baseAction