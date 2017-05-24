import fetch from 'isomorphic-fetch';

const authorizedConfig = (method, token, body) => ({
    body: JSON.stringify(body),
    method: method,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
    },
    mode: 'cors'
});

const postConfig = (body) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors'
});

const API_URI = 'https://stockfolio-server.herokuapp.com'

export function loginApi(user) {
    return fetch(API_URI+'/api/users/authenticate', postConfig(user));
}
export function registerApi(user) {
    return fetch(API_URI+'/api/users/register', postConfig(user));
}
export function validateToken(token) {
    return fetch(API_URI+'/api/users/validate', authorizedConfig('GET', token));
}
export function loadQuotes(query, token) {
    return fetch(API_URI+'/api/stocks/find?query=' + query, authorizedConfig('GET', token));
}
export function loadQuoteData(query, token) {
    return fetch(API_URI+'/api/stocks/quote?query=' + query, authorizedConfig('GET', token));
}
export function loadQuoteDataHistory(query, time, token) {
    return fetch(API_URI+'/api/stocks/quote/history?query=' + query + '&time=' + time, authorizedConfig('GET', token));
}
export function addStockToUserApi(body, token) {
    return fetch(API_URI+'/api/users/stocks/add', authorizedConfig('POST', token, body));
}
export function deleteStockFromUserApi(body, token) {
    return fetch(API_URI+'/api/users/stocks/delete', authorizedConfig('POST', token, body));
}
export function loadUserData(token) {
    return fetch(API_URI+'/api/users/profile', authorizedConfig('GET', token));
}
export function loadUsersStocks(token) {
    return fetch(API_URI+'/api/users/stocks', authorizedConfig('GET', token));
}