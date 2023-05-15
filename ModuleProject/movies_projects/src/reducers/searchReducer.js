import { SEARCH_MOVIES, LOAD_PAGE_NUMBER } from "../actions/search";

const initialState = {
  movies: [],
  totalCount: 0,
  page: 1,
};

export const searchReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies.results],
        totalCount: action.payload.movies.totalCount,
      };
    case LOAD_PAGE_NUMBER:
      return {
        ...state,
        page: action.payload.page,
      };
    default:
      return state;
  }
};
