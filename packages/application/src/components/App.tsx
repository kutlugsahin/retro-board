import * as React from 'react';
import { useParams } from 'react-router-dom';

export const App = () => {
    const match = useParams<{ boardId?: string }>();
    return (
        <div>
            Hello World
            <div>
                boardId: {match.boardId}
            </div>
        </div>
    );
}
