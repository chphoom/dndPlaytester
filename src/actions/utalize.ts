import { Item } from "../models";
import { BaseAction } from "./base/baseAction";

export class Utalize extends BaseAction {
    constructor(item: Item, name?: string, description?: string) {
        super({
            name: name ? name : `Utalize ${item.name}`,
            description: description? description: `Utalize ${item.name} to ${item.healingAmount} hit points`,
            item: item
        });
    }
}//end class Utalize