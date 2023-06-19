import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadPageNumber } from "../actions/filters";
import Content from "../Components/Content";

export default function FilteredMovies() {
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  const { movies } = useSelector((state) => state.filtersReducer);
  const { totalCount } = useSelector((state) => state.filtersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPageNumber(pageNumber));
  }, [pageNumber]);

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
}
