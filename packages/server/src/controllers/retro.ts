import express from 'express';
import uuid from 'uuid/v1';
import { Board, BoardDictionary } from './interfaces';
const app = express.Router();
const boards: BoardDictionary = {}
app.get('/create', (req, res) => {
    const board: Board = {
        id: uuid(),
    };
    boards[board.id] = board;
    return res.json(board);
})

app.get('/:id', (req, res) => {
    const board: Board = boards[req.params.id];
    if (!board) { return res.status(404); }

    return res.json(board);
});

export default app;
