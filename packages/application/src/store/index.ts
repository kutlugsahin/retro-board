import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { } from 'redux-saga';
import { reducers } from './reducer';
import { rootSaga } from './saga';
const sagaRunner = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaRunner)));
sagaRunner.run(rootSaga)

export {
    store,
};
