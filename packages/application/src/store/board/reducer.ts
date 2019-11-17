import { BoardState } from "./interfaces";
import { Action } from "redux";
import { SET_BOARD, SetBoardAction } from "./actions";

export const boards = (state: BoardState = {board: {id:'EMPTY_BOARD'}}, action: Action) => {
    switch (action.type) {
        case SET_BOARD: {
            const { payload } = action as SetBoardAction;
            return {
				...state,
				[payload.id]: payload,
            };
        }
        default:
            return state;
    }
};
