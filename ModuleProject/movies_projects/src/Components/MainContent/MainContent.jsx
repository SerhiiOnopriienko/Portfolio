import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { loadMovies } from "../../actions/movies";
import { loadGenres, loadLanguages } from "../../actions/filters";
import { getPopularMovies, getGenres, getLanguages } from "../../api/moviesApi";
import Content from "../UI/Content";

export default function MainContent() {
  const { movies, totalCount } = useSelector((state) => state.moviesReducer);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGenres().then((genres) => {
      dispatch(loadGenres(genres));
    });
    getLanguages().then((languages) => {
      dispatch(loadLanguages(languages));
    });
    getPopularMovies(page).then((movies) => {
      dispatch(loadMovies(movies));
    });
  }, [dispatch, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="main-content-container">
      <Content movies={movies} />
      <Pagination
        count={totalCount > 500 ? 500 : totalCount}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
