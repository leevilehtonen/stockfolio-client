import * as types from './actionTypes';
import { history } from '../';
import { loginApi, registerApi } from '../utils/api';
import { requestSuccessMessage, requestErrorMessage } from './msgActions';
import { setAuthNav, setDefaultNav } from './mainActions';

export const requestLogin = () => {
    return {
        type: types.LOGIN_REQUEST,
    }
}
export const receiveLogin = (token) => {
    localStorage.setItem('id_token', token);
    return {
        type: types.LOGIN_SUCCESS,
        id_token: token
    }
}

export const loginError = () => {
    localStorage.removeItem('id_token');
    return {
        type: types.LOGIN_FAILURE,
    }
}

export const requestLogout = () => {
    localStorage.removeItem('id_token');
    return {
        type: types.LOGOUT_REQUEST,
    }
}

export function loginUser(user) {
    return (dispatch) => {
        dispatch(requestLogin());
        return loginApi(user)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(receiveLogin(res.token));
                    dispatch(setAuthNav());
                    dispatch(requestSuccessMessage("Logged in"))
                    history.push('/user/stocks/dashboard');
                } else {
                    dispatch(loginError());
                    dispatch(setDefaultNav());
                    dispatch(requestErrorMessage(res.msg));
                }
            })
            .catch((err) => {
                dispatch(loginError());
                dispatch(setDefaultNav());
                dispatch(requestErrorMessage('Unknow error'))
            })

    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(logoutUser());
        history.push('/');

    }
}

export const requestRegister = () => {
    return {
        type: types.REGISTER_REQUEST,
    }
}
export const receiveRegister = () => {
    return {
        type: types.REGISTER_SUCCESS,
    }
}

export const registerError = () => {
    return {
        type: types.REGISTER_FAILURE,

    }
}

export function registerUser(user) {
    return (dispatch) => {
        dispatch(requestRegister());
        return registerApi(user)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(receiveRegister());
                    dispatch(requestSuccessMessage('You have registered'))
                    history.push('/login');

                } else {
                    dispatch(registerError());
                    dispatch(requestErrorMessage(res.msg))
                }
            })
            .catch((err) => {
                dispatch(registerError());
                dispatch(requestErrorMessage('Unknown error'))
            })
    }
}

export const authReset = () => {
    return {
        type: types.RESET_AUTH,
    }
}

export const authFromToken = (token) => {
    localStorage.setItem('id_token', token);
    return {
        type: types.AUTH_FROM_TOKEN,
        id_token: token
    }
}

