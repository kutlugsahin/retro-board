import { CardsState } from "../cards/interfaces";
import { ColumnState } from "../columns/interfaces";

export interface Board {
    id: string;
}

export interface BoardState {
    board: Board;
    cards?: CardsState;
    columns?: ColumnState;
}
