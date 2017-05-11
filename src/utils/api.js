import fetch from 'isomorphic-fetch';

const authorizedConfig = (token) => ({
    headers: {
        'Authorization': token
    }
});

const postConfig = (body) => ({
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type':'application/json'
    }
});

export function loginApi(user) {
    return fetch('http://localhost:3001/api/users/authenticate', params);
}