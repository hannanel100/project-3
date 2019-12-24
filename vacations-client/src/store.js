import { createStore, combineReducers } from 'redux';
import siteReducers from './reducers/siteReducers'
import userReducers from './reducers/userReducers'
const store = createStore(
    combineReducers({
        siteReducers,
        userReducers
    })
);

export default store;

