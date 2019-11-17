import { useParams } from 'react-router'
import * as React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const RetroBoard = () => {
    const { boardId } = useParams<{ boardId: string }>();
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(loadRetroBoard(boardId));
    // }, []);

    // const boardState = useSelector(selectBoard(boardId));

    // if (boardState) {

    // }

    // return null;

    return <div>RetroBoard with id: {boardId}</div>;
}
