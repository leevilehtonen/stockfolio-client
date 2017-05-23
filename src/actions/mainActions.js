import * as types from './actionTypes';
import { loadUserData } from '../utils/api';
import { requestErrorMessage } from './msgActions';

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

export const requestUserData = () => {
    return {
        type: types.REQUEST_USER_DATA
    }
}

export const recieveUserData = (user) => {
    return {
        type: types.RECIEVE_USER_DATA,
        user: user
    }
}

export const userDataError = () => {
    return {
        type: types.USER_DATA_ERROR
    }
}

export function fetchUserData() {
    return (dispatch) => {
        dispatch(requestUserData());
        let token = localStorage.getItem('id_token');
        return loadUserData(token)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(recieveUserData(res.user));
                } else {
                    dispatch(userDataError());
                    dispatch(requestErrorMessage('Unable to get user profile'));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(userDataError());
                dispatch(requestErrorMessage('Unknow error'))
            })

    }

}