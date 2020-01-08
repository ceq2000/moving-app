import React from 'react';
import {render} from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * Wrapping our entire app in the react-redux Provider component
 * 
 * The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
 * Since any React component in a React Redux app can be connected,
 * most applications will render a <Provider> at the top level,
 * with the entire app’s component tree inside of it.
 * Normally, you can’t use a connected component unless it is nested inside of a <Provider>.
 * 
 * @see {@link https://react-redux.js.org/api/provider}
 */
const renderApp = () => render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

/**
 * Setting up hot module reloading for our components
 */
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}
renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
