// misc formulas i guess

export function getPassivePerception(wisMod: number, proficiencyBonus: number, proficient: boolean, expertise: boolean = false, advantage: boolean = false, disadvantage: boolean = false): number {
    let perceptionModifier = wisMod + (proficient ? proficiencyBonus : 0);

    if (expertise) {
        perceptionModifier += proficiencyBonus; // Doubles proficiency bonus
    }

    let passivePerception = 10 + perceptionModifier;

    if (advantage) passivePerception += 5;
    if (disadvantage) passivePerception -= 5;

    return passivePerception;
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
