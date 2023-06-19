import { getPopularMovies } from "../api/moviesApi";
import { loadMovies } from "../actions/movies";

export const fetchMovies = ({ page }) => {
  return async (dispatch) => {
    const movies = await getPopularMovies(page);
    dispatch(loadMovies(movies));
  };
};
