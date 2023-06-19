import { getSearchMovies } from "../api/moviesApi";
import { searchMovies } from "../actions/search";

export const fetchSearchMovies = ({ search, page }) => {
  return async (dispatch) => {
    const movies = await getSearchMovies(search, page);
    dispatch(searchMovies(movies));
  };
};
