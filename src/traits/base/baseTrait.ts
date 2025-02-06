import { DamageType, Trait } from '../../models';
import { AbilityScore } from '../../services/abilityService';

export class BaseTrait implements Trait {
    name: string;
    description: string;
    saveDC?: number;                   // The DC for the saving throw (e.g., 13 for Corrosive Form)
    saveType?: AbilityScore;           // The ability score used for the saving throw (e.g., CON for Corrosive Form)
    damageOnFail?: string;         // The damage dealt on a failed save (e.g., "1d8")
    damageType?: DamageType;       // The type of damage dealt on a failed save (e.g., "acid")
    constructor(name: string, description: string, saveDC?: number, saveType?: AbilityScore, damageOnFail?: string, damageType?: DamageType) {
        this.name = name;
        this.description = description;
        this.saveDC = saveDC;
        this.saveType = saveType;
        this.damageOnFail = damageOnFail;
        this.damageType = damageType;
    }
}