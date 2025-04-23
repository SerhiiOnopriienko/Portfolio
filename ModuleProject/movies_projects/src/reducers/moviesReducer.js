import {
  LOAD_MOVIES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  LOAD_PAGE_NUMBER,
} from "../actions/movies";

const initialState = {
  movies: [],
  favoriteMovies: [],
  totalCount: 0,
};

export const moviesReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
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
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload.movieId
        ),
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
