import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const NavbarHome = () => {

const [isActive, setisActive] = React.useState(false);

const location = useLocation();

  return (
    <div>
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="opening-nav">
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start" id="home-nav">
            <Link to="/" className={location.pathname === "/" ? "navbar-item is-active" : "navbar-item"} id="home-link">
              Home
            </Link>

            <Link to="/about" className={location.pathname === "/about" ? "navbar-item is-active" : "navbar-item"} id="about-link">
              About
            </Link>

            <Link to="/contact" className={location.pathname === "/contact" ? "navbar-item is-active" : "navbar-item"} id="contact-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
    </div>
  );
}


export default NavbarHome;