import React from "react";
import { NavLink } from "react-router-dom";
import About from "./../Pages/About";
import Home from "./../Pages/Home";
import "./component_styles/navbar.css";
import searchIcon from "./../images/search-icon.svg";
import dogLogo from "./../images/dog-enc-logo.png";

const Navbar = () => {
  return (
    <article className="navbar">
      <section className="logo-container">
        <img className="dog-logo" src={dogLogo} alt="dog logo" />
      </section>
      <section className="search-bar-container">
        <div className="search-div">
          <img id="search-icon" src={searchIcon} alt="search icon" />
          <input
            className="input-field"
            type="text"
            placeholder="e.g. Husky"
          ></input>
          <button className="search-btn" type="click">
            {" "}
            Search
          </button>
        </div>
      </section>

      <section className="list-container">
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
      </section>
    </article>
  );
};

export default Navbar;
