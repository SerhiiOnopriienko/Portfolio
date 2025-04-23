export const LOAD_MOVIES = "[MOVIES] Load Movies";
export const ADD_TO_FAVORITES = "[Movies] Add movies to favorite";
export const REMOVE_FROM_FAVORITES = "[Movies] Remove movies from favorite";
export const LOAD_PAGE_NUMBER = "[Page Number] Load Page Number";

export const loadMovies = (movies, totalCount) => ({
  type: LOAD_MOVIES,
  payload: { movies, totalCount },
});

export const addToFavorites = (favoriteMovies) => ({
  type: ADD_TO_FAVORITES,
  payload: { favoriteMovies },
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: { movieId },
});

export const loadPageNumber = (page) => ({
  type: LOAD_PAGE_NUMBER,
  payload: { page },
});
