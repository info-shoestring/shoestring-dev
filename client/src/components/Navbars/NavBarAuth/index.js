import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import httpClient from "../../../httpClient";
import { mdiBellOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCogOutline } from "@mdi/js";

const NavBarAuth = (currentUser) => {
  const location = useLocation();

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  // Load the available token on pageload from local storage
  useEffect(() => {
    work();
  }, []);

  const logOut = () => {
    httpClient.logOut();
    setCurrentUserObj({ currentUser: null });
  };

  const work = () => {
    if (currentUser === null) {
      window.location.replace("/");
    }
  };

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
              to="/home"
              className={
                location.pathname === "/home" ? "navbar-item" : "navbar-item"
              }
              id="myprofile-link"
            >
              My Profile
            </Link>

            <Link
              to="/findafriend"
              className={
                location.pathname === "/findafriend"
                  ? "navbar-item"
                  : "navbar-item"
              }
              id="about-link"
            >
              Find Friends
            </Link>

            <Link
              to="/international-payments"
              className={
                location.pathname === "/international-payments"
                  ? "navbar-item"
                  : "navbar-item"
              }
              id="international-link"
            >
              International Payments
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item" id="nav-end">
              <a>
                <Icon path={mdiBellOutline}
                title="Alerts"
                size={1.15}
                // color="#ffffff"
                id="alert"
                />
              </a>
              <Link to="/settings">
                <Icon path={mdiCogOutline}
                title="Alerts"
                size={1.15}
                id="alert"
                />
              </Link>
              <div className="buttons">
                <Link to="/login" className="button is-light" id="text-theme" onClick={logOut}>
                  Logout
                </Link>
              </div>
            </div>  
          </div>
        </div>
      </nav>
      <br />
      <br />
    </div>
  );
};

export default NavBarAuth;
