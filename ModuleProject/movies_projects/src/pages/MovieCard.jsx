import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/moviesApi";
import { Spa } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { fetchFilteredMovies } from "../thunk/filteredMovies";
import { useNavigate } from "react-router-dom";

export default function () {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getMovie(movieId).then((res) => setMovie(res));
  }, []);

  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="movie-card-wrapper">
        <div className="card-content">
          <img
            className="poster-image"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : "https://m.media-amazon.com/images/I/614LWE5525L._AC_UF1000,1000_QL80_.jpg"
            }
            alt="poster"
          />
        </div>
        <div className="card-movieDescription">
          <h1>{movie.original_title}</h1>
          {movie.genres
            ? movie.genres.map((genre, index) => {
                if (index < movie.genres.length - 1) {
                  return <span>{genre.name}, </span>;
                } else {
                  return <span>{genre.name}</span>;
                }
              })
            : "no genres"}
          <h2>
            {movie.release_date === undefined
              ? ""
              : `${new Intl.DateTimeFormat("en-US", {
                  month: "long",
                }).format(
                  Number(
                    movie.release_date.split("-")[
                      movie.release_date.split("-").length - 1
                    ]
                  )
                )} ${
                  movie.release_date.split("-")[
                    movie.release_date.split("-").length - 2
                  ]
                }, ${
                  movie.release_date.split("-")[
                    movie.release_date.split("-").length - 3
                  ]
                }`}
          </h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
