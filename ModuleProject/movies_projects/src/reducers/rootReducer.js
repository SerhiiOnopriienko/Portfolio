import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { filtersReducer } from "./filtersReducer";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  moviesReducer,
  filtersReducer,
  userReducer,
  searchReducer,
});
