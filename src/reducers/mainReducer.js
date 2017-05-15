import * as types from '../actions/actionTypes';
import { defaultLinks, authLinks } from '../utils/links';

const mainReducer = (state = {
    links: defaultLinks,
    pageTitle: 'Home',
    categoryTitle: 'MENU'
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

        case types.UPDATE_TITLE:
            return Object.assign({}, state, {
                pageTitle: action.pageTitle,
                categoryTitle: action.categoryTitle
            })

        default:
            return state
    }

}

export default mainReducer;