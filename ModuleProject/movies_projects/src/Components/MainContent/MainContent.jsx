import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Content from "../Content";
import { fetchMovies } from "../../thunk/popularMovies";
import { fetchGenres, fetchLanguages } from "../../thunk/filters";

export default function MainContent() {
  const { movies, totalCount } = useSelector((state) => state.moviesReducer);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchLanguages());
  }, []);

  useEffect(() => {
    dispatch(fetchMovies({ page }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="main-content-container">
      <Content movies={movies} />
      <Pagination
        sx={{ mt: "10px" }}
        count={totalCount > 500 ? 500 : totalCount}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
