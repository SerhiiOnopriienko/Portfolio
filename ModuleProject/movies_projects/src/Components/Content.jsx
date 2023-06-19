import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CircularProgressWithLabel } from "./UI/CircularProgressWithLabel";
import IconButton from "@mui/material/IconButton";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router-dom";
import { addToFavorites } from "../actions/movies";
import { useDispatch } from "react-redux";

export default function Content({ movies }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function navigateToMovieId(movie) {
    navigate(`${movie.id}`);
  }

  function handleFavorites(movie) {
    dispatch(addToFavorites(movie));
  }

  return (
    <div className="cards-container">
      {movies.map((movie) => {
        return (
          <Card key={movie.id} sx={{ width: 250, m: "0 0 10px 10px" }}>
            <CardActionArea>
              <div
                style={{ height: "65vh" }}
                onClick={() => navigateToMovieId(movie)}
              >
                <CardMedia
                  component="img"
                  height="340"
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : "https://m.media-amazon.com/images/I/614LWE5525L._AC_UF1000,1000_QL80_.jpg"
                  }
                  alt="poster"
                />
                <CircularProgressWithLabel value={movie.vote_average} />
                <CardContent>
                  <Typography
                    sx={{ display: "inline-grid", mb: "10px" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {movie.title}
                  </Typography>
                </CardContent>
              </div>

              <div className="info">
                <Typography
                  sx={{ ml: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
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
  );
}
