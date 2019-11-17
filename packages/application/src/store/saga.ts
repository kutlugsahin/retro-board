import { all, call } from '@redux-saga/core/effects';
import { SagaIterator } from 'redux-saga';
import { retroSaga } from './board/saga';

export function* rootSaga(): SagaIterator {
    yield all([
        call(retroSaga),
    ]);
};
