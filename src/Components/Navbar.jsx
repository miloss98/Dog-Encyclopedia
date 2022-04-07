import React from "react";
import { NavLink } from "react-router-dom";
import About from "./../Pages/About";
import Home from "./../Pages/Home";
import "./component_styles/navbar.css";

const Navbar = () => {
  return (
    <article className="navbar">
      <ul className="nav-list">
        <li>
          {" "}
          <NavLink
            to="/"
            element={<Home />}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/about"
            element={<About />}
            className={({ isActive }) => (isActive ? "active" : "link")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </article>
  );
};

export default Navbar;
