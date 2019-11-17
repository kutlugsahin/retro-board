import * as React from 'react';
import { useParams } from 'react-router-dom';
import {  Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createBoard } from '../store/board/actions';
export const App = () => {
    const match = useParams<{ boardId?: string }>();
    const dispatch = useDispatch();

    const onCreate = () => {
        dispatch(createBoard());
    }
    return (
        <div>
            Hello World
            <div>
                boardId: {match.boardId}
                <Button onClick={onCreate}>Create</Button>
            </div>
        </div>
    );
}
