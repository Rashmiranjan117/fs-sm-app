import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { reducer as PostReducer } from "./PostReducer/redure";

const composeEnhancers = compose;

const rootReducer = combineReducers({ AuthReducer, PostReducer });

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
