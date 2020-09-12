import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavbarHome = () => {
  const location = useLocation();

  return (
    <div>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        id="opening-nav"
      >
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start" id="home-nav">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "navbar-item" : "navbar-item"
              }
              id="home-link"
            >
              Home
            </Link>

            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "navbar-item" : "navbar-item"
              }
              id="about-link"
            >
              About
            </Link>

            <Link
              to="/contact"
              className={
                location.pathname === "/contact" ? "navbar-item" : "navbar-item"
              }
              id="contact-link"
            >
              Contact
            </Link>
            <Link
              to="/sign-up"
              className={
                location.pathname === "/sign-up"
                  ? "navbar-item"
                  : "navbar-item"
              }
              id="signup-link"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className={
                location.pathname === "/sign-up"
                  ? "navbar-item"
                  : "navbar-item"
              }
              id="login-link"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
};

export default NavbarHome;
