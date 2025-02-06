import { Combatant, Monster, Party } from '../models';
import { AbilityScore, getAbilityModifier, Abilities } from './abilityService';
import { rollDice } from '../utils/dice';

export class EncounterService {
    combatants: Combatant[] = [];

    constructor(party: Party, monsters: Monster[]) {
        let teamA = party.name;
        this.combatants = [];
    
        // Function to generate a tiebreaker roll
        const tiebreakerRoll = () => rollDice("1d20");
    
        // Parse player characters
        party.members.forEach((member) => {
            const initiative = rollDice("1d20") + getAbilityModifier(member.abilities, AbilityScore.Dexterity);
            this.combatants.push({ 
                name: member.name, 
                initiative, 
                tiebreaker: tiebreakerRoll(), // Store tiebreaker roll
                PlayerCharacter: member, 
                team: teamA 
            });
        });
    
        // Parse party's pets and allies
        [...party.pets, ...party.allies].forEach((member) => {
            const initiative = rollDice("1d20") + getAbilityModifier(member.abilities, AbilityScore.Dexterity);
            this.combatants.push({ 
                name: member.name, 
                initiative, 
                tiebreaker: tiebreakerRoll(),
                Monster: member, 
                team: teamA 
            });
        });
    
        // Parse monsters
        let teamB = "Monsters";
        monsters.forEach((monster) => {
            const initiative = rollDice("1d20") + getAbilityModifier(monster.abilities, AbilityScore.Dexterity);
            this.combatants.push({ 
                name: monster.name, 
                initiative, 
                tiebreaker: tiebreakerRoll(),
                Monster: monster, 
                team: teamB 
            });
        });
    
        // Sort combatants by initiative, using tiebreaker rolls when needed
        this.combatants.sort((a, b) => {
            if (b.initiative !== a.initiative) {
                return b.initiative - a.initiative;
            } else {
                return b.tiebreaker - a.tiebreaker; // Higher roll wins the tie
            }
        });
    }//end constructor
    
}//end class EncounterService