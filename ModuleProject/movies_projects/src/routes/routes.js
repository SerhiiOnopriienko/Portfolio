import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import Wrapper from "../pages/Wrapper";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import MovieCard from "../pages/MovieCard";
import MainContent from "../Components/MainContent/MainContent";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import FilteredMovies from "../pages/FilteredMovies";

export const router = createBrowserRouter([
  {
    path: "/main",
    element: (
      <ProtectedRouter>
        <Wrapper />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/main",
        element: <MainContent />,
      },
      {
        path: ":movieId",
        element: <MovieCard />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "favorites/:movieId",
        element: <MovieCard />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "search/:movieId",
        element: <MovieCard />,
      },
      {
        path: "filtered",
        element: <FilteredMovies />,
      },
      {
        path: "filtered/:movieId",
        element: <MovieCard />,
      },
      {
        path: "*",
        element: <h1>Not found</h1>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="/main" />,
  },
]);
