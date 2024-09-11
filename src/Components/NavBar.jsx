import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        margin: 0,
        padding: 20,
      }}
    >
      <Link to="/">React Router DOM</Link>
      <hr />
      <Link to="/about">About</Link>
    </nav>
  );
};
