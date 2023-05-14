import {
  LOAD_MOVIES,
  SEARCH_MOVIES,
  FILTER_MOVIES,
  ADD_TO_FAVORITES,
} from "../actions/movies";

const initialState = {
  movies: [],
  favoriteMovies: [],
  totalCount: 0,
};

export const moviesReducer = function (state = initialState, action) {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies.results],
        totalCount: action.payload.movies.totalCount,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies.results],
        totalCount: action.payload.movies.totalCount,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [
          ...state.favoriteMovies,
          action.payload.favoriteMovies,
        ],
      };
    default:
      return state;
  }
};
