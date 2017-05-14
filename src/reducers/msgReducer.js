import * as types from '../actions/actionTypes';

const msgReducer = (state = {
    shouldSendMessage: false,
    msg: null,
    color: null
}, action) => {
    switch (action.type) {
        case types.REQUEST_SUCCESS_MESSAGE:
            return Object.assign({}, state, {
                shouldSendMessage: true,
                msg: action.msg,
                color: 'success'
            })

        case types.REQUEST_ERROR_MESSAGE:
            return Object.assign({}, state, {
                shouldSendMessage: true,
                msg: action.msg,
                color: 'error'
            })

        case types.RECIEVE_MESSAGE:
            return Object.assign({}, state, {
                shouldSendMessage: false,
                msg: null,
                color: null
            })
        default:
            return state;
    }
}

export default msgReducer;