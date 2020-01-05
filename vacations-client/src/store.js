import { createStore, combineReducers, applyMiddleware } from "redux";
import siteReducers from "./reducers/siteReducers";
import userReducers from "./reducers/userReducers";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({
    siteReducers,
    userReducers
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
