import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducers from "./reducers/userReducers";
import thunk from "redux-thunk";
const store = createStore(
  combineReducers({

    userReducers
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
