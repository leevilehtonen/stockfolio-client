import * as types from './actionTypes';


export const requestSuccessMessage = (msg) => {
    return {
        type: types.REQUEST_SUCCESS_MESSAGE,
        msg : msg,
    }
}

export const requestErrorMessage = (msg) => {
    return {
        type: types.REQUEST_ERROR_MESSAGE,
        msg : msg,
    }
}

export const recieveMessage = () => {
    return {
        type: types.RECIEVE_MESSAGE,
    }
}