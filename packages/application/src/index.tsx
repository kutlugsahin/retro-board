import * as React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { store } from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RetroBoard } from './components/RetroBoard';
render((
    <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route path="/" exact={true}>
                    <App />
                </Route>
                <Route path="/:boardId">
                    <RetroBoard />
                </Route>
            </Switch>
        </Provider>
    </BrowserRouter>
), document.getElementById('app'));
