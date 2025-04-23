import React, { useEffect } from "react";
import Genres from "./Genres";
import Languages from "./Languages";
import Buttons from "../UI/Buttons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFilteredMovies } from "../../thunk/filteredMovies";

export default function Filters() {
  const dispatch = useDispatch();

  const { selectedGenres, selectedLanguages, page } = useSelector(
    (state) => state.filtersReducer
  );
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    const with_genres = selectedGenres.map((genre) => genre.id).join(",");
    const with_original_language = !selectedLanguages.length
      ? "en"
      : selectedLanguages[0].iso_639_1;
    dispatch(
      fetchFilteredMovies({ page, with_genres, with_original_language })
    );
    navigate("/main/filtered");
  }

  useEffect(() => {
    const with_genres = selectedGenres.map((genre) => genre.id).join(",");
    const with_original_language = !selectedLanguages.length
      ? "en"
      : selectedLanguages[0].iso_639_1;
    dispatch(
      fetchFilteredMovies({ page, with_genres, with_original_language })
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <form onSubmit={onSubmit} className="sidebar-container">
      <h1>Filters</h1>
      <Genres />
      <Languages />
      <Buttons
        type={"submit"}
        sx={{
          color: "#00BFFF",
          mt: "20px",
          height: "50px",
          width: "100%",
        }}
      >
        Filter
      </Buttons>
    </form>
  );
}
