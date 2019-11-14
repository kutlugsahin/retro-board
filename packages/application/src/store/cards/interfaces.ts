export interface Card {
    id: string;
    text: string;
}

export interface CardsState {
    [key: string]: Card;
}
