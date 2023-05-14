export const LOAD_GENRES = "[Genres] Load Genres";
export const LOAD_LANGUAGES = "[Languages] Load Languages";
export const FILTER_GENRES = "[Genres] Filter Genres";
export const FILTER_LANGUAGE = "[Language] Filter Language";
export const LOAD_FILTERED_MOVIES = "[Movies] Load Filtered Movies";

export const loadGenres = (genres) => ({
  type: LOAD_GENRES,
  payload: { genres },
});

export const loadLanguages = (languages) => ({
  type: LOAD_LANGUAGES,
  payload: { languages },
});

export const filterGenres = (selectedGenres) => ({
  type: FILTER_GENRES,
  payload: { selectedGenres },
});

export const filterLanguage = (selectedLanguages) => ({
  type: FILTER_LANGUAGE,
  payload: { selectedLanguages },
});

export const loadFilteredMovies = (movies, totalCount) => ({
  type: LOAD_FILTERED_MOVIES,
  payload: { movies, totalCount },
});
