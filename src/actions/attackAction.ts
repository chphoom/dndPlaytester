import { BaseAction } from "./base/baseAction";
import { Attack } from "../models";

export class AttackAction extends BaseAction {
    constructor(attack: Attack) {
        super({
            name: attack.name,
            description: attack.description,
            attack: attack
        });
    }
}//end class AttackAction