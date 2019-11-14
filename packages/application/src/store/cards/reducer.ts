import { CardsState } from './interfaces';
import { Action } from 'redux';
import { ADD_CARD, AddCardAction } from './actions';

export const cards = (state: CardsState = {}, action: Action) => {
    switch (action.type) {
        case ADD_CARD: {
            const { payload } = action as AddCardAction;
            return {
                ...state,
                [payload.card.id]: payload.card,
            };
        }
        default:
            return state;
    }
}
