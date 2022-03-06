import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

const middlewares = [logger];

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default rootReducer;
