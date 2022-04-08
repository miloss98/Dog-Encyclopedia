import React from "react";
import { NavLink } from "react-router-dom";
import About from "./../Pages/About";
import Home from "./../Pages/Home";
import "./component_styles/navbar.css";

const Navbar = () => {
  return (
    <article className="navbar">
      <div className="logo-container">
        <img
          className="dog-logo"
          src="./../../images/dog-enc-logo.png"
          alt="dog logo"
        />
      </div>

      <div className="list-container">
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              element={<Home />}
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              element={<About />}
              className={({ isActive }) => (isActive ? "active" : "link")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Navbar;
