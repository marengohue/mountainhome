import type {IValue} from "./IValue";
import type {LayoutType} from "./LayoutType";
import type {Rarity} from "./Rarity";

export interface ICard {
    title: string,
    mainText?: string;
    artUri: string;
    type: string,
    layout: LayoutType,
    rarity: Rarity,
    flavourText: string
    value: IValue
}