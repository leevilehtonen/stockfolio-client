import * as types from './actionTypes';
import { loginApi, registerApi } from '../utils/api';

export const requestLogin = () => {
    return {
        type: types.LOGIN_REQUEST,
    }
}
export const receiveLogin = (token) => {
    return {
        type: types.LOGIN_SUCCESS,
        id_token: token
    }
}

export const loginError = (message) => {
    return {
        type: types.LOGIN_FAILURE,
        message
    }
}

export const requestLogout = () => {
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
                } else {
                    dispatch(loginError(res.msg));
                }
            })
            .catch((err) => {
                dispatch(loginError('Unauthorized'));
            })

    }
}

export function logoutUser() {
    return (dispatch) => {
        dispatch(logoutUser())
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

export const registerError = (message) => {
    return {
        type: types.REGISTER_FAILURE,
        message
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
                } else {
                    dispatch(registerError(res.msg));
                }
            })
            .catch((err) => {
                dispatch(registerError('Unauthorized'));
            })
    }
}