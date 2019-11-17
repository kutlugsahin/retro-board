import { cards } from './cards/reducer';
import { columns } from './columns/reducer';
import { combineReducers } from 'redux';
import { boards } from './board/reducer';

export const reducers = combineReducers({
    boards,
    cards,
    columns,
});
