/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 * @see {@link https://redux.js.org/basics/reducers}
 * 
 */

import { Browser as JotBrowser } from 'jwt-jot'

import { LOGIN, LOGOUT } from "../actionTypes";

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            new JotBrowser('jwt', action.payload.tokens.user);
            new JotBrowser('refreshJwt', action.payload.tokens.refresh);
            return {
                ...state,
                details: setUserDetails()
            };
        }
        case LOGOUT: {
            // remove all tokens from local storage
            const jot = new JotBrowser('jwt');
            if (jot.getToken()) jot.eject();
            const refreshJot = new JotBrowser('refreshJwt');
            if (refreshJot.getToken()) refreshJot.eject();

            return {
                ...state,
                details: setUserDetails()
            };
        }
        default:
            return {
                ...state,
                details: setUserDetails()
            };
    }
}

const setUserDetails = () => {
    const jot = new JotBrowser('jwt');
    return jot.getToken() ?
        {
            firstName: jot.getClaim('firstName'),
            role: jot.getClaim('role'),
            id: jot.getClaim('sub')
        } :
        null;
}
export const initialState = {
    details: setUserDetails()
};