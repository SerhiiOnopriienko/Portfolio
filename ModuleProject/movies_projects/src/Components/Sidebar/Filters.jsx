import React from "react";
import Genres from "./Genres";
import Languages from "./Languages";
import Buttons from "../UI/Buttons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadFilteredMovies } from "../../actions/filters";
import { getFilteredMovies } from "../../api/moviesApi";
import { useNavigate } from "react-router-dom";

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
    getFilteredMovies(page, with_genres, with_original_language).then(
      (movies) => {
        dispatch(loadFilteredMovies(movies));
      }
    );
    navigate("/main/filtered");
  }
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
        Search
      </Buttons>
    </form>
  );
}
