export function rollDice(dice: string): number {
    // Match dice notation like "2d6+3" or "1d20-5"
    const match = dice.match(/(\d+)d(\d+)([+-]\d+)?/);

    if (!match) {
        throw new Error(`Invalid dice format: ${dice}`);
    }

    const num = parseInt(match[1], 10); // Number of dice
    const sides = parseInt(match[2], 10); // Dice sides
    const modifier = match[3] ? parseInt(match[3], 10) : 0; // Modifier (optional)

    let total = 0;
    for (let i = 0; i < num; i++) {
        total += Math.floor(Math.random() * sides) + 1;
    }

    return total + modifier;
}//end rollDice function