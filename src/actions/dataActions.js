import * as types from './actionTypes';
import { loadQuotes } from '../utils/api';
import { requestErrorMessage } from './msgActions';



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