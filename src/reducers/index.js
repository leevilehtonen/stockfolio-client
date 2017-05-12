import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

const stockfolioApp = combineReducers({
    auth:authReducer,
    router:routerReducer
});

export default stockfolioApp;