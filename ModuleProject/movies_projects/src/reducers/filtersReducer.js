import {
  LOAD_GENRES,
  LOAD_LANGUAGES,
  FILTER_GENRES,
  FILTER_LANGUAGE,
  LOAD_FILTERED_MOVIES,
} from "../actions/filters";

const initialState = {
  genres: [],
  selectedGenres: [],
  languages: [],
  selectedLanguages: [],
  totalCount: 0,
  movies: [],
};

export const filtersReducer = function (state = initialState, action) {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case LOAD_GENRES:
      return {
        ...state,
        genres: [...action.payload.genres],
      };
    case LOAD_LANGUAGES:
      return {
        ...state,
        languages: [...action.payload.languages],
      };
    case FILTER_GENRES:
      return {
        ...state,
        selectedGenres: state.genres.filter((genre) =>
          action.payload.selectedGenres.includes(genre.name)
        ),
      };
    case FILTER_LANGUAGE:
      return {
        ...state,
        selectedLanguages: state.languages.filter((language) =>
          action.payload.selectedLanguages.includes(language.english_name)
        ),
      };
    case LOAD_FILTERED_MOVIES:
      return {
        ...state,
        movies: [...action.payload.movies.results],
        totalCount: action.payload.movies.totalCount,
      };
    default:
      return state;
  }
};
