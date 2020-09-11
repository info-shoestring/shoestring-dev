import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./additional.css";
import "./style.css";
import Image from '../../../images/Logos/cover.png';
import HeroPhoto from "../../../images/Logos/cover.png";

function DrawerHome() {

    const location = useLocation();
  
    return (
    <>
      <div className="pure-container" data-effect="pure-effect-slide">
        <input
          type="checkbox"
          id="pure-toggle-right"
          className="pure-toggle"
          data-toggle="right"
        />
        <label
          className="pure-toggle-label"
          htmlFor="pure-toggle-right"
          data-toggle-label="right"
        >
          <span className="pure-toggle-icon"></span>
        </label>
        <nav className="pure-drawer" data-position="right">
                <div className="row collapse ">
                    <div>
                        <ul className="nav-primary" id="menu-links">
                            <hr/>
                                <li>
                                    <Link to="/" className={location.pathname === "/" ? "navbar-item" : "navbar-item"} id="home-link">
                                    Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className={location.pathname === "/about" ? "navbar-item" : "navbar-item"} id="about-link">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={location.pathname === "/contact" ? "navbar-item" : "navbar-item"} id="contact-link">
                                        Contact
                                    </Link>
                                </li>
                            <hr/>
                                <li>
                                    <Link to="/sign-up" className={location.pathname === "/sign-up" ? "navbar-item" : "navbar-item"} id="signup-link">
                                        Sign Up
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className={location.pathname === "/login" ? "navbar-item" : "navbar-item"} id="login-link">
                                        Login
                                    </Link>
                                </li>
                            <hr/> 
                        </ul>
                    </div> 
                </div>
            </nav>
        <div className="pure-pusher-container">
          <div className="pure-pusher"></div>
        </div>
        <label
          className="pure-overlay"
          htmlFor="pure-toggle-right"
          data-overlay="right"
        ></label>
      </div>
    </>
  );
}

export default DrawerHome;
