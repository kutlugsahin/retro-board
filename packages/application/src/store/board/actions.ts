import { createAction } from "../utils/actions";
import { Board } from "./interfaces";

export const SET_BOARD = 'SET_BOARD';

export const CREATE_BOARD = 'CREATE_BOARD';
export const GET_BOARD = 'GET_BOARD';
export const createBoard = () => createAction(CREATE_BOARD);
export const getBoard = (id: string) => createAction(GET_BOARD, { id });

export const setBoard = (board: Board) => createAction(SET_BOARD, board);

export type CreateBoardAction = ReturnType<typeof createBoard>;
export type GetBoardAction = ReturnType<typeof getBoard>;

export type SetBoardAction = ReturnType<typeof setBoard>;