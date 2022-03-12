import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cartReducer";
import directoryReducer from "./reducers/directoryReducer";
import shopReducer from "./reducers/shopReducer";
import userReducer from "./reducers/userReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
