import { useParams } from 'react-router'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from '../../store/board/selectors';
import { getBoard } from '../../store/board/actions';
// import { useDispatch, useSelector } from 'react-redux';

export const RetroBoard = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(loadRetroBoard(boardId));
    // }, []);

    const boardState = useSelector(selectBoard);

    if (!boardState) {
        dispatch(getBoard(boardId));
        return null;
    }

    // return null;

    return <div>RetroBoard with id: {boardId}</div>;
}
