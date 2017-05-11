import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

const stockfolioApp = combineReducers({
    authReducer,
    routerReducer
});

export default stockfolioApp;