import * as types from '../actions/actionTypes';


const dataReducer = (state = {
    showResults: false,
    isFetching: false,
    quotes: [],
    quoteSnapshot: {},
    stocks: []
}, action) => {
    switch (action.type) {
        case types.REQUEST_QUOTES:
            return Object.assign({}, state, {
                showResults: true,
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

        case types.REQUEST_QUOTE_DATA:
            return Object.assign({}, state, {
                isFetching: true,
            })

        case types.RECIEVE_QUOTE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                quoteSnapshot: action.snapshot
            })

        case types.RECIEVE_QUOTE_HIST_DAY:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistDay: action.day
            })
        case types.RECIEVE_QUOTE_HIST_WEEK:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistWeek: action.week
            })
        case types.RECIEVE_QUOTE_HIST_MONTH:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistMonth: action.month
            })
        case types.RECIEVE_QUOTE_HIST_YEAR:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistYear: action.year
            })
        case types.RECIEVE_QUOTE_HIST_THREE_MONTH:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistThreeMonth: action.threeMonth
            })
        case types.RECIEVE_QUOTE_HIST_THREE_YEAR:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistThreeYear: action.threeYear
            })
        case types.RECIEVE_QUOTE_HIST_ALL:
            return Object.assign({}, state, {
                isFetching: false,
                quoteHistAll: action.all
            })
        case types.REQUEST_USER_STOCK_ADD:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case types.RECIEVE_USER_STOCK_ADD:
            return Object.assign({}, state, {
                isFetching: false,
            })
        case types.REQUEST_USER_STOCK_DELETE:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case types.RECIEVE_USER_STOCK_DELETE:
            return Object.assign({}, state, {
                isFetching: false,
            })
        case types.REQUEST_USER_STOCKS:
            return Object.assign({}, state, {
                isFetching: true,
                stocks: []
            })
        case types.RECIEVE_USER_STOCKS:
            return Object.assign({}, state, {
                isFetching: false,
                stocks: action.stocks

            })
        default:
            return state;
    }
}

export default dataReducer;