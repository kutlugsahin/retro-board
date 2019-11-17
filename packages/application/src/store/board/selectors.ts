import { BoardState, Board } from "./interfaces";
import { State } from "../interfaces";

export type SelectBoard = () => Board | null;

export const selectBoard = (state: State): BoardState => {
	return state.board;
}
