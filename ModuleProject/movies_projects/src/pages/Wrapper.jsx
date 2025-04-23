import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Components/Header";
import Filters from "../Components/Sidebar/Filters";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <div
      style={{
        padding: "0",
        margin: "0 -24px 0 -24px",
      }}
    >
      <CssBaseline sx={{ p: "0" }} />
      <Container maxWidth="100vh" sx={{ p: "0" }}>
        <Header />
        <div className="app-container">
          <Filters />
          <Outlet />
        </div>
        <Footer />
      </Container>
    </div>
  );
}
