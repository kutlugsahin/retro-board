import { CardsState } from "./cards/interfaces";
import { BoardState } from "./board/interfaces";
import { ColumnState } from "./columns/interfaces";

export interface State {
	board: BoardState;
}