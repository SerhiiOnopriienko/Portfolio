import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { filtersReducer } from "./filtersReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  filtersReducer,
  userReducer,
});
