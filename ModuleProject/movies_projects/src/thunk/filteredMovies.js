import { getFilteredMovies } from "../api/moviesApi";
import { loadFilteredMovies } from "../actions/filters";

export const fetchFilteredMovies = ({
  page,
  with_genres,
  with_original_language,
}) => {
  return async (dispatch) => {
    const movies = await getFilteredMovies(
      page,
      with_genres,
      with_original_language
    );
    dispatch(loadFilteredMovies(movies));
  };
};
