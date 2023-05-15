import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import Content from "../Components/UI/Content";
import { loadPageNumber } from "../actions/movies";
import { useDispatch } from "react-redux";

export default function () {
  const { movies, totalCount } = useSelector((state) => state.searchReducer);

  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };

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
