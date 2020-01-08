/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 * Remember that actions only describe what happened, but don't describe how the application's state changes.
 * @see {@link https://redux.js.org/basics/reducers}
 * 
 * Here we are combinging two reducers into a single root reducer,
 * and also creating a rootState, which will be the initial state passed to the store.
 */


import { combineReducers } from "redux";   // @see {@link https://redux.js.org/api/combinereducers/}
import user, { initialState as userState } from "./user";


/**
 * Create correctly setup initial state for root reducer
 */
export const rootState = {
    user: userState
};

/**
 * Merging our separate reducers into one root reducer
 */
export default combineReducers({
    user
});