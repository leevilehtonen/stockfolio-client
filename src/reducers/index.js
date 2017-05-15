import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import msgReducer from './msgReducer';
import mainReducer from './mainReducer';
import dataReducer from './dataReducer'

const stockfolioApp = combineReducers({
    main: mainReducer,
    auth:authReducer,
    msg:msgReducer,
    data: dataReducer,
    router:routerReducer
});

export default stockfolioApp;