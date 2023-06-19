import { loadGenres, loadLanguages } from "../actions/filters";
import { getGenres, getLanguages } from "../api/moviesApi";

export const fetchGenres = () => {
  return async (dispatch) => {
    const genres = await getGenres();
    dispatch(loadGenres(genres));
  };
};

export const fetchLanguages = () => {
  return async (dispatch) => {
    const languages = await getLanguages();
    dispatch(loadLanguages(languages));
  };
};
