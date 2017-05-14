import * as types from '../actions/actionTypes';
import { defaultLinks, authLinks } from '../utils/links';

const mainReducer = (state = {
    links: defaultLinks
}, action) => {

    switch (action.type) {
        case types.SET_AUTH_NAV:
            return Object.assign({}, state, {
                links: authLinks,
            })
        case types.SET_DEFAULT_NAV:
            return Object.assign({}, state, {
                links: defaultLinks,
            })
        default:
            return state
    }

}

export default mainReducer;