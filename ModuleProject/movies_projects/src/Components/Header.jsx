import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Buttons from "./UI/Buttons";
import { useDispatch } from "react-redux";
import { searchMovies } from "../actions/movies";
import { getSearchMovies } from "../api/moviesApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let [search, setSearch] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const {
    userName: { userName },
  } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const onSubmit = function (e) {
    e.preventDefault();
    getSearchMovies(search).then((movies) => {
      dispatch(searchMovies(movies));
    });
    navigate("/main/search");
  };

  return (
    <Box sx={{ bgcolor: "#F8F8FF" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: 50,
          backgroundColor: "#00008B",
        }}
      >
        <form onSubmit={onSubmit} className="search-field">
          <input
            className="search-input"
            type="text"
            name="searchBar"
            placeholder="Enter a movie or show name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
          ></input>
          <button type={"submit"} className="search-button">
            <SearchIcon />
          </button>
        </form>
        <Link to="favorites">
          <Buttons sx={{ height: "100%", color: "#00BFFF" }}>Favorites</Buttons>
        </Link>
        <div>
          {userName ? (
            <Buttons sx={{ color: "#00BFFF", height: "100%" }}>
              Hello {userName}!
            </Buttons>
          ) : (
            <>
              <Link to="/login">
                <Buttons sx={{ color: "#00BFFF", height: "100%" }}>
                  Login
                </Buttons>
              </Link>
              <Link to="/register">
                <Buttons sx={{ color: "#00BFFF", height: "100%" }}>
                  Register
                </Buttons>
              </Link>
            </>
          )}
        </div>
      </Box>
    </Box>
  );
}
