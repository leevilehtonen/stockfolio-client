import * as types from './actionTypes';


export const requestMessage = (msg, color) => {
    return {
        type: types.REQUEST_MESSAGE,
        msg : msg,
        color: color
    }
}

export const recieveMessage = () => {
    return {
        type: types.RECIEVE_MESSAGE,
    }
}