import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";

const middlewares = [logger];

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default rootReducer;
