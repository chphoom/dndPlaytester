import { BaseAction } from "./base/baseAction";
import { BaseMonster } from "../monsters";
import { rollDice } from "../utils/dice";
import { Monster } from "../models";

export class Summon extends BaseAction {
    creatures: BaseMonster[];

    constructor(
        monsterClass: typeof BaseMonster,  // Class constructor for the monster
        quantity: string,                  // The quantity (e.g., "3" or "3d4")
        monsterData: Monster,              // The data object to pass to the monster's constructor
        name?: string,
        description?: string
    ) {
        super({
            name: name ? name : `Summon ${quantity} ${monsterClass.name}(s)`,
            description: description ? description : `Summon ${quantity} ${monsterClass.name}(s)`,
        });

        let numCreatures: number;
        if (quantity.includes("d")) {
            numCreatures = rollDice(quantity); // Roll dice to determine number of creatures
        } else {
            numCreatures = parseInt(quantity, 10); // Parse number if it's a plain integer
        }

        // Generate the summoned creatures, passing the data to the monster's constructor
        this.creatures = Array.from({ length: numCreatures }, () => new monsterClass(monsterData));
    }
}