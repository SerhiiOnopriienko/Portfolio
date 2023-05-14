export const LOAD_MOVIES = "[MOVIES] Load Movies";
export const SEARCH_MOVIES = "[MOVIES] Search Movies";
export const ADD_TO_FAVORITES = "[Movies] Add movies to favorite";

export const loadMovies = (movies, totalCount) => ({
  type: LOAD_MOVIES,
  payload: { movies, totalCount },
});

export const searchMovies = (movies, totalCount) => ({
  type: SEARCH_MOVIES,
  payload: { movies, totalCount },
});

export const addToFavorites = (favoriteMovies) => ({
  type: ADD_TO_FAVORITES,
  payload: { favoriteMovies },
});
