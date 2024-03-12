import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import globalReducer from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { storeReducer } from "./reducers/storeReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { productReducer } from "./reducers/productReducer";

export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  store: storeReducer,
  shop: shoppingCartReducer,
  products: productReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
