import { DamageType } from "../models";
import { AbilityScore } from "../services/abilityService";
import { BaseTrait } from "./base/baseTrait";

export class CorrosiveForm extends BaseTrait {
    constructor() {
        super("Corrosive Form", 
            "A creature that touches the ooze or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage.",
            13,
        AbilityScore.Constitution,
        "1d8",
        DamageType.Acid);
    }
}//end class CorrosiveForm