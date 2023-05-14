import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CircularProgressWithLabel } from "../Components/UI/CircularProgressWithLabel";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GradeIcon from "@mui/icons-material/Grade";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../actions/movies";
import { loadPageNumber } from "../actions/filters";

export default function FilteredMovies() {
  const [pageNumber, setPageNumber] = useState(1);
  const handleChange = (event, value) => {
    setPageNumber(value);
  };
  const { movies } = useSelector((state) => state.filtersReducer);
  const { totalCount } = useSelector((state) => state.filtersReducer);

  const navigate = useNavigate();
  function navigateToMovieId(movie) {
    navigate(`${movie.id}`);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPageNumber(pageNumber));
  }, [pageNumber]);

  function handleFavorites(movie) {
    dispatch(addToFavorites(movie));
  }

  return (
    <div className="main-content-container">
      <div className="cards-container">
        {movies.map((movie) => {
          return (
            <Card id={movie.id} sx={{ width: 250, m: "0 0 10px 10px" }}>
              <CardActionArea>
                <div onClick={() => navigateToMovieId(movie)}>
                  <CardMedia
                    component="img"
                    height="340"
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="poster"
                  />
                  <CircularProgressWithLabel value={movie.vote_average} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </div>

                <div className="info">
                  <Typography variant="body2" color="text.secondary">
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
                  </Typography>
                  <IconButton
                    onClick={() => handleFavorites(movie)}
                    color="primary"
                    aria-label="add to shopping cart"
                  >
                    <GradeIcon />
                  </IconButton>
                </div>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
      <Pagination
        count={totalCount}
        page={pageNumber}
        onChange={handleChange}
      />
    </div>
  );
}
