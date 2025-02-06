export interface Abilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
} //end interface Abilities

export enum AbilityScore {
    Strength = "strength",
    Dexterity = "dexterity",
    Constitution = "constitution",
    Intelligence = "intelligence",
    Wisdom = "wisdom",
    Charisma = "charisma"
} //end enum AbilityScore

// Function to calculate an ability modifier from a score
export function getAbilityModifier(abilities: Abilities, ability: AbilityScore): number {
    const score = abilities[ability]; // Dynamically access the correct ability score
    return Math.floor((score - 10) / 2); // Standard D&D modifier formula
}

// Function to determine a saving throw bonus (assuming proficiency is handled separately)
export function getSavingThrowBonus(abilities: Abilities, ability: AbilityScore, proficiencyBonus: number, isProficient: boolean): number {
    let modifier = getAbilityModifier(abilities, ability);
    if (isProficient) {
        modifier += proficiencyBonus;
    }
    return modifier;
}