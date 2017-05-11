import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import stockfolioApp from '../reducers';

export default (preloadedState, history) => {
    return createStore(
        stockfolioApp,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history),
            createLogger()
        )
    )
};