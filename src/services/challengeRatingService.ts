import { Monster, Action, Spell, Attack } from "../models";

export enum ChallengeRating {
    Zero = 0,
    OneEighth = 0.125,
    OneQuarter = 0.25,
    OneHalf = 0.5,
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12,
    Thirteen = 13,
    Fourteen = 14,
    Fifteen = 15,
    Sixteen = 16,
    Seventeen = 17,
    Eighteen = 18,
    Nineteen = 19,
    Twenty = 20,
    TwentyOne = 21,
    TwentyTwo = 22,
    TwentyThree = 23,
    TwentyFour = 24,
    TwentyFive = 25,
    TwentySix = 26,
    TwentySeven = 27,
    TwentyEight = 28,
    TwentyNine = 29,
    Thirty = 30
} //end enum ChallengeRating

export function getProficiencyBonus(cr: ChallengeRating): number {
    if (cr >= 29) return 9;
    if (cr >= 25) return 8;
    if (cr >= 21) return 7;
    if (cr >= 17) return 6;
    if (cr >= 13) return 5;
    if (cr >= 9) return 4;
    if (cr >= 5) return 3;
    return 2; // Default for CR 0–4
} ///end function getProficiencyBonus

export function getXP(cr: ChallengeRating): number {
    switch (cr) {
        case ChallengeRating.Zero: return 10;
        case ChallengeRating.OneEighth: return 25;
        case ChallengeRating.OneQuarter: return 50;
        case ChallengeRating.OneHalf: return 100;
        case ChallengeRating.One: return 200;
        case ChallengeRating.Two: return 450;
        case ChallengeRating.Three: return 700;
        case ChallengeRating.Four: return 1100;
        case ChallengeRating.Five: return 1800;
        case ChallengeRating.Six: return 2300;
        case ChallengeRating.Seven: return 2900;
        case ChallengeRating.Eight: return 3900;
        case ChallengeRating.Nine: return 5000;
        case ChallengeRating.Ten: return 5900;
        case ChallengeRating.Eleven: return 7200;
        case ChallengeRating.Twelve: return 8400;
        case ChallengeRating.Thirteen: return 10000;
        case ChallengeRating.Fourteen: return 11500;
        case ChallengeRating.Fifteen: return 13000;
        case ChallengeRating.Sixteen: return 15000;
        case ChallengeRating.Seventeen: return 18000;
        case ChallengeRating.Eighteen: return 20000;
        case ChallengeRating.Nineteen: return 22000;
        case ChallengeRating.Twenty: return 25000;
        case ChallengeRating.TwentyOne: return 33000;
        case ChallengeRating.TwentyTwo: return 41000;
        case ChallengeRating.TwentyThree: return 50000;
        case ChallengeRating.TwentyFour: return 62000;
        case ChallengeRating.TwentyFive: return 75000;
        case ChallengeRating.TwentySix: return 90000;
        case ChallengeRating.TwentySeven: return 105000;
        case ChallengeRating.TwentyEight: return 120000;
        case ChallengeRating.TwentyNine: return 135000;
        case ChallengeRating.Thirty: return 155000;
        default: return 0;
    }
} //end function getXP

 function getAC(cr: ChallengeRating): number {
    if (cr >= 30) return 23;
    if (cr >= 27) return 22;
    if (cr >= 25) return 21;
    if (cr >= 21) return 20;
    if (cr >= 18) return 19;
    if (cr >= 15) return 18;
    if (cr >= 12) return 17;
    if (cr >= 9) return 16;
    if (cr >= 6) return 15;
    if (cr >= 3) return 14;
    if (cr >= 0.5) return 13;
    return 12;
}//end function getAC

 function getHP(cr: ChallengeRating): number {
    switch(cr) {
        case ChallengeRating.Zero: return 3;
        case ChallengeRating.OneEighth: return 9;
        case ChallengeRating.OneQuarter: return 15;
        case ChallengeRating.OneHalf: return 24;
        case ChallengeRating.One: return 30;
        case ChallengeRating.Two: return 45;
        case ChallengeRating.Three: return 60;
        case ChallengeRating.Four: return 75;
        case ChallengeRating.Five: return 90;
        case ChallengeRating.Six: return 105;
        case ChallengeRating.Seven: return 125;
        case ChallengeRating.Eight: return 135;
        case ChallengeRating.Nine: return 150;
        case ChallengeRating.Ten: return 165;
        case ChallengeRating.Eleven: return 180;
        case ChallengeRating.Twelve: return 195;
        case ChallengeRating.Thirteen: return 210;
        case ChallengeRating.Fourteen: return 225;
        case ChallengeRating.Fifteen: return 240;
        case ChallengeRating.Sixteen: return 255;
        case ChallengeRating.Seventeen: return 270;
        case ChallengeRating.Eighteen: return 285;
        case ChallengeRating.Nineteen: return 300;
        case ChallengeRating.Twenty: return 315;
        case ChallengeRating.TwentyOne: return 330;
        case ChallengeRating.TwentyTwo: return 350;
        case ChallengeRating.TwentyThree: return 375;
        case ChallengeRating.TwentyFour: return 400;
        case ChallengeRating.TwentyFive: return 425;
        case ChallengeRating.TwentySix: return 450;
        case ChallengeRating.TwentySeven: return 475;
        case ChallengeRating.TwentyEight: return 500;
        case ChallengeRating.TwentyNine: return 550;
        case ChallengeRating.Thirty: return 600;
    }
 }//end function getHP

 function getCRFromHP(hp: number): ChallengeRating {
    if (hp >= 600) return ChallengeRating.Thirty;
    if (hp >= 550) return ChallengeRating.TwentyNine;
    if (hp >= 500) return ChallengeRating.TwentyEight;
    if (hp >= 475) return ChallengeRating.TwentySeven;
    if (hp >= 450) return ChallengeRating.TwentySix;
    if (hp >= 425) return ChallengeRating.TwentyFive;
    if (hp >= 400) return ChallengeRating.TwentyFour;
    if (hp >= 375) return ChallengeRating.TwentyThree;
    if (hp >= 350) return ChallengeRating.TwentyTwo;
    if (hp >= 330) return ChallengeRating.TwentyOne;
    if (hp >= 315) return ChallengeRating.Twenty;
    if (hp >= 300) return ChallengeRating.Nineteen;
    if (hp >= 285) return ChallengeRating.Eighteen;
    if (hp >= 270) return ChallengeRating.Seventeen;
    if (hp >= 255) return ChallengeRating.Sixteen;
    if (hp >= 240) return ChallengeRating.Fifteen;
    if (hp >= 225) return ChallengeRating.Fourteen;
    if (hp >= 210) return ChallengeRating.Thirteen;
    if (hp >= 195) return ChallengeRating.Twelve;
    if (hp >= 180) return ChallengeRating.Eleven;
    if (hp >= 165) return ChallengeRating.Ten;
    if (hp >= 150) return ChallengeRating.Nine;
    if (hp >= 135) return ChallengeRating.Eight;
    if (hp >= 125) return ChallengeRating.Seven;
    if (hp >= 105) return ChallengeRating.Six;
    if (hp >= 90) return ChallengeRating.Five;
    if (hp >= 75) return ChallengeRating.Four;
    if (hp >= 60) return ChallengeRating.Three;
    if (hp >= 45) return ChallengeRating.Two;
    if (hp >= 30) return ChallengeRating.One;
    if (hp >= 24) return ChallengeRating.OneHalf;
    if (hp >= 15) return ChallengeRating.OneQuarter;
    if (hp >= 9) return ChallengeRating.OneEighth;
    return ChallengeRating.Zero;
}

  function getAbilityBonus(cr: ChallengeRating): number{
    if (cr >= 30) return 10;
    if (cr >= 26) return 9;
    if (cr >= 22) return 8;
    if (cr >= 18) return 7;
    if (cr >= 14) return 6;
    if (cr >= 10) return 5;
    if (cr >= 4) return 4;
    if (cr >= 2) return 3;
    if (cr >= 0.5) return 2;
    if (cr >= 0.125) return 1;
    return 0;
 }//end function getAbilityBonus

 export function getNumAttacks(cr: ChallengeRating): number {
    if (cr >= 17) return 4;
    if (cr >= 11) return 3;
    if (cr >= 2) return 2;
    return 1;
 }//end function getNumAttacks

 function getDamagePerRound(cr: ChallengeRating): number {
    switch(cr) {
        case ChallengeRating.Zero: return 1;
        case ChallengeRating.OneEighth: return 3;
        case ChallengeRating.OneQuarter: return 5;
        case ChallengeRating.OneHalf: return 8;
        case ChallengeRating.One: return 10;
        case ChallengeRating.Two: return 15;
        case ChallengeRating.Three: return 20;
        case ChallengeRating.Four: return 25;
        case ChallengeRating.Five: return 30;
        case ChallengeRating.Six: return 35;
        case ChallengeRating.Seven: return 40;
        case ChallengeRating.Eight: return 45;
        case ChallengeRating.Nine: return 50;
        case ChallengeRating.Ten: return 55;
        case ChallengeRating.Eleven: return 60;
        case ChallengeRating.Twelve: return 65;
        case ChallengeRating.Thirteen: return 70;
        case ChallengeRating.Fourteen: return 75;
        case ChallengeRating.Fifteen: return 80;
        case ChallengeRating.Sixteen: return 85;
        case ChallengeRating.Seventeen: return 90;
        case ChallengeRating.Eighteen: return 95;
        case ChallengeRating.Nineteen: return 100;
        case ChallengeRating.Twenty: return 105;
        case ChallengeRating.TwentyOne: return 110;
        case ChallengeRating.TwentyTwo: return 116;
        case ChallengeRating.TwentyThree: return 125;
        case ChallengeRating.TwentyFour: return 133;
        case ChallengeRating.TwentyFive: return 141;
        case ChallengeRating.TwentySix: return 150;
        case ChallengeRating.TwentySeven: return 158;
        case ChallengeRating.TwentyEight: return 166;
        case ChallengeRating.TwentyNine: return 183;
        case ChallengeRating.Thirty: return 200;
    }
 }//end function getDamagePerRound

 function getCRFromDamage(dpr: number): ChallengeRating {
    if (dpr >= 200) return ChallengeRating.Thirty;
    if (dpr >= 183) return ChallengeRating.TwentyNine;
    if (dpr >= 166) return ChallengeRating.TwentyEight;
    if (dpr >= 158) return ChallengeRating.TwentySeven;
    if (dpr >= 150) return ChallengeRating.TwentySix;
    if (dpr >= 141) return ChallengeRating.TwentyFive;
    if (dpr >= 133) return ChallengeRating.TwentyFour;
    if (dpr >= 125) return ChallengeRating.TwentyThree;
    if (dpr >= 116) return ChallengeRating.TwentyTwo;
    if (dpr >= 110) return ChallengeRating.TwentyOne;
    if (dpr >= 105) return ChallengeRating.Twenty;
    if (dpr >= 100) return ChallengeRating.Nineteen;
    if (dpr >= 95) return ChallengeRating.Eighteen;
    if (dpr >= 90) return ChallengeRating.Seventeen;
    if (dpr >= 85) return ChallengeRating.Sixteen;
    if (dpr >= 80) return ChallengeRating.Fifteen;
    if (dpr >= 75) return ChallengeRating.Fourteen;
    if (dpr >= 70) return ChallengeRating.Thirteen;
    if (dpr >= 65) return ChallengeRating.Twelve;
    if (dpr >= 60) return ChallengeRating.Eleven;
    if (dpr >= 55) return ChallengeRating.Ten;
    if (dpr >= 50) return ChallengeRating.Nine;
    if (dpr >= 45) return ChallengeRating.Eight;
    if (dpr >= 40) return ChallengeRating.Seven;
    if (dpr >= 35) return ChallengeRating.Six;
    if (dpr >= 30) return ChallengeRating.Five;
    if (dpr >= 25) return ChallengeRating.Four;
    if (dpr >= 20) return ChallengeRating.Three;
    if (dpr >= 15) return ChallengeRating.Two;
    if (dpr >= 10) return ChallengeRating.One;
    if (dpr >= 8) return ChallengeRating.OneHalf;
    if (dpr >= 5) return ChallengeRating.OneQuarter;
    if (dpr >= 3) return ChallengeRating.OneEighth;
    return ChallengeRating.Zero;
}

 export function getDC(cr: ChallengeRating, easy: boolean): number {
    if (cr >=29 && easy) return 19;
    if (cr >= 30) return 27;
    if (cr >= 29) return 26;
    if (cr >= 25 && easy) return 18;
    if (cr >= 26) return 25;
    if (cr >= 21 && easy) return 17;
    if (cr >= 25) return 24;
    if (cr >= 22) return 23;
    if (cr >= 21) return 22;
    if (cr >= 17 && easy) return 16;
    if (cr >= 18) return 21;
    if (cr >=17) return 20;
    if (cr >= 9 && easy) return 15;
    if (cr >= 14) return 19;
    if (cr >= 13) return 18;
    if (cr >= 10) return 17;
    if (cr >= 9) return 16;
    if (cr >= 5 && easy) return 14;
    if (cr >=5) return 15;
    if (cr == 4 && easy) return 13;
    if (cr >= 4) return 14;
    if (cr >= 2) return 13;
    if (cr >= 0.5) return 12;
    if (cr >= 0.125) return 11;
    return 10;
 }//end function getSaveDC

 function getHighestAttackBonus(monster: Monster): number {
    let highestBonus = -Infinity;

    function checkActions(actions?: Action[]) {
        if (!actions) return;
        for (const action of actions) {
            if (action.attack && action.attack.toHit > highestBonus) {
                highestBonus = action.attack.toHit;
            }
        }
    }

    // Check all action types
    checkActions(monster.actions);
    checkActions(monster.bonusActions);
    checkActions(monster.reactions);
    checkActions(monster.legendaryActions);
    checkActions(monster.lairActions);

    return highestBonus === -Infinity ? 0 : highestBonus; // Default to 0 if no attacks found
}//end function getHighestAttackBonus

function calcDamagePerRound(monster: Monster): number {
    let totalDamage = 0;

    // Calculate damage for all actions
    if (monster.actions) {
        monster.actions.forEach(action => {
            if (action.attack) {
                totalDamage += calcAttackDamage(action.attack, action);
            }
            if (action.spell) {
                totalDamage += calcSpellDamage(action.spell);
            }
        });
    }

    // Calculate damage from bonus actions (if any)
    if (monster.bonusActions) {
        monster.bonusActions.forEach(bonusAction => {
            if (bonusAction.attack) {
                totalDamage += calcAttackDamage(bonusAction.attack, bonusAction);
            }
            if (bonusAction.spell) {
                totalDamage += calcSpellDamage(bonusAction.spell);
            }
        });
    }

    // Calculate damage from legendary actions (if any)
    if (monster.legendaryActions) {
        monster.legendaryActions.forEach(legendaryAction => {
            if (legendaryAction.attack) {
                totalDamage += calcAttackDamage(legendaryAction.attack, legendaryAction);
            }
            if (legendaryAction.spell) {
                totalDamage += calcSpellDamage(legendaryAction.spell);
            }
        });
    }

    // Factor in any special traits (if any)
    if (monster.traits) {
        monster.traits.forEach(trait => {
            // Example: if trait includes an attack (you could add more specific logic here)
            if (trait.name.toLowerCase().includes("attack")) {
                // This assumes the trait includes damage somehow; adjust this as needed
                // As an example, adding hypothetical damage
                totalDamage += 10;  // Replace this with logic specific to the trait
            }
        });
    }

    // Return the total average damage per round
    return totalDamage;
}

function calcAttackDamage(attack: Attack, action: Action): number {
    // Calculate the average damage for an attack using the dice notation
    const [dice, modifier] = attack.damage.split('+');
    const [numDice, dieType] = dice.split('d').map(Number);

    // Calculate the average damage of the dice
    const averageDiceDamage = (numDice * (dieType + 1)) / 2;
    const totalDamage = averageDiceDamage + (attack.damageBonus || 0);

    // Multiply by the number of targets for area or multi-target attacks
    const totalTargets = attack.targets || 1;
    return totalDamage * totalTargets;
}

function calcSpellDamage(spell: Spell): number {
    // This function calculates the damage from spells, assuming damage is in a similar format
    // If the spell has damage associated with it, you could follow a similar calculation
    if (spell.description.toLowerCase().includes("damage")) {
        // For simplicity, let's assume that spell damage follows "XdY" or "XdY+Z" format
        const regex = /(\d+)d(\d+)(?:\+(\d+))?/;
        const match = spell.description.match(regex);

        if (match) {
            const numDice = Number(match[1]);
            const dieType = Number(match[2]);
            const bonus = match[3] ? Number(match[3]) : 0;

            // Calculate the average damage of the dice
            const averageDiceDamage = (numDice * (dieType + 1)) / 2;
            return averageDiceDamage + bonus;
        }
    }

    return 0; // No damage found in spell description
}

function adjustDefensiveCR(cr: ChallengeRating, acDifference: number): ChallengeRating {
    return (acDifference >= 3 || acDifference <= -3) ? 
        (cr + Math.floor(acDifference / 3)) as ChallengeRating : cr;
}

function adjustOffensiveCR(cr: ChallengeRating, attackBonusDifference: number): ChallengeRating {
    return (attackBonusDifference >= 2 || attackBonusDifference <= -2) ? 
        (cr + Math.floor(attackBonusDifference / 2)) as ChallengeRating : cr;
}

 export function calcCR(monster: Monster): ChallengeRating {
    let defensiveCR = getCRFromHP(monster.hp);
    console.log("Your defensive CR is: " + defensiveCR);
    let expectedAC = getAC(defensiveCR);
    console.log("Your expected AC is: " + expectedAC);
    let actualAC = monster.ac;
    console.log("Your actual AC is: " + actualAC);

    // Calculate the difference between expected and actual AC
    let acDifference = actualAC - expectedAC;
    console.log("Your AC difference is: " + acDifference);

    // Suggest AC adjustment
    if (Math.abs(acDifference) >= 3) {
        let acAdjustmentPercent = Math.abs(acDifference) * 5; // 5% per point of AC difference
        if (acDifference > 0) {
            console.log(`Consider reducing HP or DPR by ${acAdjustmentPercent}% to maintain balance.`);
        } else {
            console.log(`Consider increasing HP or DPR by ${acAdjustmentPercent}% to maintain balance.`);
        }
    }
    
    // Adjust Defensive CR based on AC difference
    let newDefenseCR = adjustDefensiveCR(defensiveCR, acDifference);
    console.log("Your suggested defensive CR is: " + newDefenseCR);

    let offensiveCR = getCRFromDamage(calcDamagePerRound(monster));
    console.log("Your offensive CR is: " + offensiveCR);

    let expectedAttackBonus = getAbilityBonus(offensiveCR);
    console.log("Your expected attack bonus is: " + expectedAttackBonus);
    let actualAttackBonus = getHighestAttackBonus(monster);
    console.log("Your actual attack bonus is: " + actualAttackBonus);

    let attackBonusDifference = actualAttackBonus - expectedAttackBonus;
    console.log("Your attack bonus difference is: " + attackBonusDifference);

    // Suggest changes for Attack Bonus
    if (Math.abs(attackBonusDifference) >= 1) {
        let attackBonusAdjustmentPercent = Math.abs(attackBonusDifference) * 5;
        console.log(`Consider adjusting DPR by ${attackBonusAdjustmentPercent}% for attack bonus discrepancy.`);
    }

    let newOffensiveCR = adjustOffensiveCR(offensiveCR, attackBonusDifference);
    console.log("Your suggested offensive CR is: " + newOffensiveCR);


    // Factor in special traits (e.g., regeneration)
    if (monster.traits) {
        monster.traits.forEach(trait => {
            if (trait.name.toLowerCase().includes("regeneration") || trait.name.toLowerCase().includes("healing")) {
                let adjustedHP = monster.hp * 0.7; // Adjust HP for regeneration
                console.log("Your HP after adjustment for regenerative traits is: " + adjustedHP);
                let adjustedDefensiveCR = getCRFromHP(adjustedHP);
                console.log("Your new defensive CR after regeneration adjustment is: " + adjustedDefensiveCR);
            }
        });
    }

    // Calculate final CR
    let finalCR = Math.round((defensiveCR + offensiveCR) / 2);
    console.log("Your final CR is: " + finalCR);
    return finalCR as ChallengeRating;
}