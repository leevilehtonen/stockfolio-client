import * as types from '../actions/actionTypes';


const dataReducer = (state = {
    showResults: false,
    isFetching: false,
    quotes: [],
}, action) => {
    switch (action.type) {
        case types.REQUEST_QUOTES:
            return Object.assign({}, state, {
                showResults: false,
                isFetching: true,
            })
        case types.RECIEVE_QUOTES:
            return Object.assign({}, state, {
                showResults: true,
                isFetching: false,
                quotes: action.quotes,
            })
        case types.RECIEVE_ERROR:
            return Object.assign({}, state, {
                showResults: false,
                isFetching: false,
                quotes: []
            })

        default:
            return state;
    }
}

export default dataReducer;