import * as types from './actionTypes';
import { loadQuotes, loadQuoteData, loadQuoteDataHistory, addStockToUserApi } from '../utils/api';
import { requestErrorMessage, requestSuccessMessage } from './msgActions';





export const requestQuotes = () => {
    return {
        type: types.REQUEST_QUOTES
    }

}

export const recieveQuotes = (quotes) => {
    return {
        type: types.RECIEVE_QUOTES,
        quotes: quotes
    }
}

export const recieveError = () => {
    return {
        type: types.RECIEVE_ERROR,
    }
}

export function fetchQuotes(query) {
    return (dispatch) => {
        dispatch(requestQuotes());
        let token = localStorage.getItem('id_token');
        return loadQuotes(query, token)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(recieveQuotes(res.ResultSet.Result));
                } else {
                    dispatch(recieveError());
                    dispatch(requestErrorMessage('Unable to fetch data with given query'));
                }
            })
            .catch((err) => {
                dispatch(recieveError());
                dispatch(requestErrorMessage('Unknow error'))
            })

    }

}

export const requestQuoteData = () => {
    return {
        type: types.REQUEST_QUOTE_DATA
    }

}

export const recieveQuoteData = (snapshot) => {
    return {
        type: types.RECIEVE_QUOTE_DATA,
        snapshot: snapshot,
    }
}

export const recieveQuoteHistDay = (day) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_DAY,
        day: day
    }
}

export const recieveQuoteHistWeek = (week) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_WEEK,
        week: week
    }
}

export const recieveQuoteHistMonth = (month) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_MONTH,
        month: month
    }
}

export const recieveQuoteHistYear = (year) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_YEAR,
        year: year
    }
}

export const recieveQuoteHistAll = (all) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_ALL,
        all: all
    }
}

export const recieveQuoteHistThreeMonth = (threeMonth) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_THREE_MONTH,
        threeMonth: threeMonth
    }
}

export const recieveQuoteHistThreeYear = (threeYear) => {
    return {
        type: types.RECIEVE_QUOTE_HIST_THREE_YEAR,
        threeYear: threeYear
    }
}


export function fetchQuoteData(query) {
    return (dispatch) => {
        dispatch(requestQuoteData());
        let token = localStorage.getItem('id_token');
        return loadQuoteData(query, token)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(recieveQuoteData(res));
                    dispatch(fetchQuoteDataHistory(query, 'day'))
                } else {
                    dispatch(recieveError());
                    dispatch(requestErrorMessage('Unable to fetch data with given query'));
                }
            })
            .catch((err) => {
                dispatch(recieveError());
                dispatch(requestErrorMessage('Unknow error'))
            })

    }

}



export function fetchQuoteDataHistory(query, time) {
    return (dispatch) => {
        dispatch(requestQuoteData());
        let token = localStorage.getItem('id_token');
        return loadQuoteDataHistory(query, time, token)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    switch (time) {
                        case 'day':
                            dispatch(recieveQuoteHistDay(res.series));
                            break;
                        case 'week':
                            dispatch(recieveQuoteHistWeek(res.series));
                            break;
                        case 'month':
                            dispatch(recieveQuoteHistMonth(res.series));
                            break;
                        case 'year':
                            dispatch(recieveQuoteHistYear(res.series));
                            break;
                        case 'threeMonth':
                            dispatch(recieveQuoteHistThreeMonth(res.series));
                            break;
                        case 'threeYear':
                            dispatch(recieveQuoteHistThreeYear(res.series));
                            break;
                        case 'all':
                            dispatch(recieveQuoteHistAll(res.series));
                            break;
                        default:
                            break;

                    }
                } else {
                    dispatch(recieveError());
                    dispatch(requestErrorMessage('Unable to fetch data with given query'));
                }
            })
            .catch((err) => {
                dispatch(recieveError());
                dispatch(requestErrorMessage('Unknow error'))
            })

    }

}


export const requestStockAdd = () => {
    return {
        type: types.REQUEST_STOCK_ADD,
    }
}
export const receiveStockAdd = () => {
    return {
        type: types.RECIEVE_STOCK_ADD,
    }
}

export function addStockToUser(symbol, count) {
    return (dispatch) => {
        dispatch(requestStockAdd());
        let token = localStorage.getItem('id_token');
        let body = {
            symbol: symbol,
            count: count,
        }

        return addStockToUserApi(body, token)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(receiveStockAdd());
                    dispatch(requestSuccessMessage('You have added stock to your collection'))
                } else {
                    dispatch(recieveError());
                    dispatch(requestErrorMessage(res.msg))
                }
            })
            .catch((err) => {
                dispatch(recieveError());
                dispatch(requestErrorMessage('Unknown error'))
            })
    }
}