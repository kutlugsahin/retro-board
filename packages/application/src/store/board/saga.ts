import { SagaIterator } from 'redux-saga';
import { takeEvery, all, put } from '@redux-saga/core/effects';
import { CREATE_BOARD, GET_BOARD, GetBoardAction, setBoard } from './actions';

function* createBoard() {
    const board = yield fetch('/api/retro/create').then(p => p.json());
    yield put(setBoard(board));
    console.log(board);
    window.history.pushState(null, '', `/${board.id}`);
}

function* getBoard({ payload: { id } }: GetBoardAction) {
    const board = yield fetch(`/api/retro/${id}`).then(p => p.json());
    yield put(setBoard(board));
}

export const retroSaga = function* (): SagaIterator {
    yield all([takeEvery(CREATE_BOARD, createBoard), takeEvery(GET_BOARD, getBoard)]);
};
