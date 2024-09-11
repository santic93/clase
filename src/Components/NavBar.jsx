import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "green",
        padding: "15px 30px",
        gap: "20px",
        justifyContent: "space-around",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        React Router DOM
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
    </nav>
  );
};
