export interface Column {
    id: string;
    name: string;
    cards: string[];
}

export interface ColumnState {
    [key: string]: Column;
}