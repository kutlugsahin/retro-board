import { cards } from './cards/reducer';
import { columns } from './columns/reducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    cards,
    columns,
});
