import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { middlewares } from "./middlewares";

const middlewarwEnhancer = applyMiddleware(...middlewares);
const composeEnhancer = compose(middlewarwEnhancer);

export const store = createStore(rootReducer, composeEnhancer);