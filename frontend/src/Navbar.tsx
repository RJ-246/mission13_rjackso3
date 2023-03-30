import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-dark sticky-top navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/podcasts" className="nav-link" style={{ color: "white" }}>
            Podcasts
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/movies" className="nav-link" style={{ color: "white" }}>
            Movie Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
