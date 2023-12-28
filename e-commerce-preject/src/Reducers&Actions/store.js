import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { storeReducer } from "./reducers/storeReducer";
import { shoppincCartReducer } from "./reducers/shoppingCartReducer";
import { productReducer } from "./reducers/productReducer";

export const reducers = combineReducers({
  general: globalReducer,
  user: userReducer,
  store: storeReducer,
  shop: shoppincCartReducer,
  products: productReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
