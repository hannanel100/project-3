import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const initState = {
    siteName: "Vacations Tagger"
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_SITE_NAME":
            state = { ...state, siteName: action.payload }
            break;
    }
    return state
}
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
