import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

const middlewares = [logger];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  // {},
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);
