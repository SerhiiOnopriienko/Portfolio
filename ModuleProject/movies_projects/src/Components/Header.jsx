import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Buttons from "./UI/Buttons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchValue } from "../actions/search";
import logo from "../assets/logo.png";

export default function Header() {
  let [search, setSearch] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const {
    userName: { userName },
  } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(getSearchValue(search));
    setSearch("");
    navigate("search");
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
        <Link to="/main">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <form onSubmit={handleSubmit} className="search-field">
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
