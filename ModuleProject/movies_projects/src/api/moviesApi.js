import axios from "axios";
import { ACCESS_KEY } from "../config/config";

const moviesApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export const getPopularMovies = async function (page) {
  const {
    data: { results, total_pages },
  } = await moviesApi.get("movie/popular", {
    params: {
      api_key: ACCESS_KEY,
      page,
    },
  });
  const totalCount = Number(total_pages);
  return { results, totalCount };
};

export const getFilteredMovies = async function (
  page,
  with_genres,
  with_original_language
) {
  const {
    data: { results, total_pages },
  } = await moviesApi.get("discover/movie", {
    params: {
      api_key: ACCESS_KEY,
      page,
      with_genres,
      with_original_language,
    },
  });
  const totalCount = Number(total_pages);
  return { results, totalCount };
};

export const getSearchMovies = async function (query, page) {
  const {
    data: { results, total_pages },
  } = await moviesApi.get("/search/movie", {
    params: {
      api_key: ACCESS_KEY,
      query,
      page,
    },
  });
  const totalCount = total_pages;
  return { results, totalCount };
};

export const getGenres = async function () {
  const {
    data: { genres },
  } = await moviesApi.get("/genre/movie/list", {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  return genres;
};

export const getLanguages = async function () {
  const { data } = await moviesApi.get("/configuration/languages", {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  return data;
};

export const getMovie = async function (movieId) {
  const { data } = await moviesApi.get(`movie/${movieId}`, {
    params: {
      api_key: ACCESS_KEY,
    },
  });
  return data;
};
