export const SEARCH_MOVIES = "[MOVIES] Search Movies";
export const LOAD_PAGE_NUMBER = "[Page Number] Load Page Number";

export const searchMovies = (movies, totalCount) => ({
  type: SEARCH_MOVIES,
  payload: { movies, totalCount },
});

export const loadPageNumber = (page) => ({
  type: LOAD_PAGE_NUMBER,
  payload: { page },
});
