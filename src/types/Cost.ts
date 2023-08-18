import type { ICard } from "./ICard";
import type { IValue } from "./Value.ts";

export type Cost = Array<Array<IValue>>;

export function hasCost(card: ICard) {
    return card.cost !== undefined && card.cost.length > 0;
}