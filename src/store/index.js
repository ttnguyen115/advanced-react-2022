import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { fetchCollectionStart } from "./actions/shop";
import cartReducer from "./reducers/cartReducer";
import directoryReducer from "./reducers/directoryReducer";
import shopReducer from "./reducers/shopReducer";
import userReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

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
  // {},
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(fetchCollectionStart);
export const persistor = persistStore(store);
