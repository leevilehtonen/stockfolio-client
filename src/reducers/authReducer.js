import * as types from '../actions/actionTypes';
import jwtDecode from 'jwt-decode';


const authReducer = (state = {
    token: null,
    userName: null,
    isFetching: false,
    isAuthenticated: false,
    statusText: null,

}, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                statusText: null
            })
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                statusText: 'You have been logged in',
                token: action.id_token,
                userName: jwtDecode(action.id_token).name

            })
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                token: null,
                userName: null,
                statusText: action.message,
            })

        case types.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                userName: null,
                statusText: 'You have been logged out'
            })

        case types.REGISTER_REQUEST:
            return Object.assign({}, state, {
                isFetching:true,
                statusText: null
            })
        case types.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching:false,
                statusText: 'You have been registered'
            })
        case types.REGISTER_FAILURE:
            return Object.assign({}, state, {
                isFetching:false,
                statusText: action.message
            })



        default:
            return state;
    }
}

export default authReducer;