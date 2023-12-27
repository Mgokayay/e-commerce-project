import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { globalReducer } from "./reducers/globalReducer";

export const reducers = combineReducers({
  general: globalReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
