import * as types from '../actions/actionTypes';

const msgReducer = (state = {
    shouldSendMessage: false,
    msg: null,
    color: null
}, action) => {
    switch (action.type) {
        case types.REQUEST_MESSAGE:
            return Object.assign({}, state, {
                shouldSendMessage: true,
                msg: action.msg,
                color: action.color
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