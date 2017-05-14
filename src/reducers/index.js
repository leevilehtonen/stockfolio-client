import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import msgReducer from './msgReducer';

const stockfolioApp = combineReducers({
    auth:authReducer,
    msg:msgReducer,
    router:routerReducer
});

export default stockfolioApp;