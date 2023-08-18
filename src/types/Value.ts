import type { ICard } from "./ICard";

export interface IValue {
    resource: "rock" | "shinies" | "booze" | "vp"
    value: number
}

export function hasValue(card: ICard) {
    return card.value !== undefined;
}
