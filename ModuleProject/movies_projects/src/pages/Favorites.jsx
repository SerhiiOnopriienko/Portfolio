import React from "react";
import { useSelector } from "react-redux";
import Content from "../Components/UI/Content";

export default function Favorites() {
  const { favoriteMovies } = useSelector((state) => state.moviesReducer);

  return (
    <div className="main-content-container">
      <Content movies={favoriteMovies} />
    </div>
  );
}
