import { createStore } from "redux";
import rootReducer, { rootState } from "./reducers";


/**
 * 
 * @see {@link https://redux.js.org/api/createstore}
 */
function configureStore(preloadedState) {

    const store = createStore(
        rootReducer,
        preloadedState,
        // allowing our store to be enhanced by the redux devtools (with which we can do time-travel and state inspection)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    // Setting up hot module reloading for our reducers
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store
}

export default configureStore(rootState);