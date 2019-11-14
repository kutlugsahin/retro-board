import { createAction } from '../utils/actions';
import { Card } from './interfaces';

export const ADD_CARD = 'ADD_CARD';
export const addCard = (card: Card) => createAction(ADD_CARD, {
    card,
});

export type AddCardAction = ReturnType<typeof addCard>;
