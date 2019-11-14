import { Action } from 'redux';

function createAction(type: string): Action;
function createAction<T>(type: string, payload: T): Action & { payload: T };
function createAction<T>(type: string, payload?: T) {
    return {
        type, payload,
    };
}

export {
    createAction,
}
