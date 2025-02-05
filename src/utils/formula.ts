// misc formulas i guess

export function calculatePassivePerception(
    wisdom: number,
    proficiencySource: { cr?: number; level?: number }, 
    isProficient: boolean, 
    hasExpertise: boolean = false
): number {
    let proficiencyBonus = 0;

    if (proficiencySource.cr !== undefined) {
        // Get proficiency based on Challenge Rating (for monsters)
        proficiencyBonus = getProficiencyBonus(proficiencySource.cr);
    } else if (proficiencySource.level !== undefined) {
        // Get proficiency based on Level (for players/NPCs)
        proficiencyBonus = getCharacterProficiencyBonus(proficiencySource.level);
    }

    let perceptionModifier = Math.floor((wisdom - 10) / 2);

    if (isProficient) {
        perceptionModifier += hasExpertise ? proficiencyBonus * 2 : proficiencyBonus;
    }

    return 10 + perceptionModifier;
}

export function getProficiencyBonus(cr: number): number {
    if (cr >= 29) return 9;
    if (cr >= 25) return 8;
    if (cr >= 21) return 7;
    if (cr >= 17) return 6;
    if (cr >= 13) return 5;
    if (cr >= 9) return 4;
    if (cr >= 5) return 3;
    return 2; // Default for CR 0–4
} ///end function getProficiencyBonus

export function getCharacterProficiencyBonus(level: number): number {
    if (level >= 17) return 6;
    if (level >= 13) return 5;
    if (level >= 9) return 4;
    if (level >= 5) return 3;
    return 2; // Default for levels 1–4
}
