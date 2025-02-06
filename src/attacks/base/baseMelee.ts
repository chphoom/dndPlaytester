import { Attack, DamageType, PlayerCharacter, Spell } from "../../models";
import { rollDice } from "../../utils/dice";

export class BaseMelee implements Attack {
    name: string;
    description: string;
    toHit: number;
    reach: number;
    range: undefined;
    damage: string;
    damageBonus: number;
    damageType: DamageType;
    targets: number;
    targeted: PlayerCharacter[];

    constructor(name: string, description: string, toHit: number, damage: string, damageType: DamageType, targeted: PlayerCharacter[], damageBonus?: number, reach?: number) {
        this.name = name;
        this.description = description;
        this.toHit = rollDice("1d20") + toHit;
        this.reach = reach ? reach : 5;
        this.damage = `${rollDice(damage) + (damageBonus ? damageBonus : 0)}`;
        this.damageBonus = damageBonus ? damageBonus : 0;
        this.damageType = damageType;
        this.targets = 1;
        this.targeted = targeted ? targeted : [];
    }   
}