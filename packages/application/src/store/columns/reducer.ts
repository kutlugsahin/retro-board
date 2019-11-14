import { Action } from 'redux';
import { ColumnState } from './interfaces';

const defaultState: ColumnState = {
    1: {
        id: '1',
        name: 'Good',
        cards: ['1', '2', '3'],
    },
    2: {
        id: '2',
        name: 'Bad',
        cards: ['4', '5', '6'],
    },
    3: {
        id: '3',
        name: 'Action',
        cards: ['7', '8', '9'],
    },
}

export const columns = (state: ColumnState = defaultState, action: Action) => {
    return state;
}
