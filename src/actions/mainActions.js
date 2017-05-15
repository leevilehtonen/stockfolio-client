import * as types from './actionTypes';
import { validateToken } from '../utils/api';
import { authFromToken, authReset } from './authActions';


export function loadInitialState() {
    return (dispatch) => {
        let token = localStorage.getItem('id_token');
        if (token !== null) {
            return validateToken(token)
                .then((res) => res.json())
                .then((res) => {
                    if (res.valid) {
                        dispatch(authFromToken(token));
                        dispatch(setAuthNav());
                    } else {
                        dispatch(authReset());
                        dispatch(setDefaultNav());
                    }
                })
                .catch((err) => {
                    dispatch(authReset());
                    dispatch(setDefaultNav());
                })
        }
    }
}


export const setAuthNav = () => {
    return {
        type: types.SET_AUTH_NAV
    }
}

export const setDefaultNav = () => {
    return {
        type: types.SET_DEFAULT_NAV
    }
}

export const updateTitle = (pageTitle, categoryTitle) => {
    return {
        type: types.UPDATE_TITLE,
        pageTitle: pageTitle,
        categoryTitle: categoryTitle
    }
}
