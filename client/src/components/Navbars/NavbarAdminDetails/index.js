import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import httpClient from "../../../httpClient";
import Icon from "@mdi/react";
import { mdiCogOutline } from "@mdi/js";

const NavBarAdmin = (currentUser) => {

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
          </div>
          <div className="navbar-end">
            <div className="navbar-item" id="nav-end">
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

export default NavBarAdmin;