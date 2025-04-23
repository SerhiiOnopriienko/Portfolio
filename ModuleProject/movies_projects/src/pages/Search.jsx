import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import Content from "../Components/Content";
import { loadPageNumber } from "../actions/movies";
import { useDispatch } from "react-redux";
import { fetchSearchMovies } from "../thunk/searchMovies";

export default function Search() {
  const { movies, totalCount, searchValue, page } = useSelector(
    (state) => state.searchReducer
  );

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  useEffect(() => {
    dispatch(loadPageNumber(pageNumber));
    dispatch(fetchSearchMovies({ search: searchValue, page: pageNumber }));
  }, [searchValue, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
  }, [searchValue]);

  if (movies.length) {
    return (
      <div className="main-content-container">
        <Content movies={movies} />
        <Pagination
          count={totalCount > 500 ? 500 : totalCount}
          page={pageNumber}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return (
      <div className="main-content-container">
        <h2>Nothing found</h2>
      </div>
    );
  }
}
