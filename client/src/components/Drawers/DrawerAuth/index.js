import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import httpClient from "../../../httpClient";
import { mdiBellOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiCogOutline } from "@mdi/js";
import "./style.css";
import "../style.css";

const DrawerAuth = (currentUser) => {
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
    <>
      <div className="pure-container" data-effect="pure-effect-push">
        <input
          type="checkbox"
          id="pure-toggle-left"
          className="pure-toggle"
          data-toggle="left"
        />
        <label
          className="pure-toggle-label"
          htmlFor="pure-toggle-left"
          data-toggle-label="left"
        >
          <span className="pure-toggle-icon"></span>
        </label>
        <nav className="pure-drawer" data-position="left">
          <div className="row collapse ">
            <div>
              <ul className="nav-primary" id="menu-links">
                <Link
                  to="/home"
                  className={
                    location.pathname === "/home"
                      ? "navbar-item title is-3"
                      : "navbar-item title is-3"
                  }
                  id="myprofile-title"
                >
                  Shoestring
                </Link>
                <hr />
                <li>
                  <Link
                    to="/home"
                    className={
                      location.pathname === "/home"
                        ? "navbar-item"
                        : "navbar-item"
                    }
                    id="myprofile-link"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/findafriend"
                    className={
                      location.pathname === "/findafriend"
                        ? "navbar-item"
                        : "navbar-item"
                    }
                    id="findafriend-link"
                  >
                    Find Friends
                  </Link>
                </li>
                <li>
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
                </li>
                <hr />
                <li>
                  <Link>
                    <Icon
                      path={mdiBellOutline}
                      title="Alerts"
                      size={1.15}
                      color="#363636"
                      id="alert"
                    />
                    Alerts
                  </Link>
                </li>
                <li>
                  <Link to="/settings">
                    <Icon
                      path={mdiCogOutline}
                      title="Settings"
                      size={1.15}
                      color="#ffffff"
                      id="alert"
                    />
                    Settings
                  </Link>
                </li>
                <hr/>
                <li>
                  <Link
                    to="/"
                    className={
                      location.pathname === "/" ? "navbar-item" : "navbar-item"
                    }
                    id="logout-link"
                    onClick={logOut}
                  >
                    Logout
                  </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </nav>
        <div className="pure-pusher-container">
          <div className="pure-pusher"></div>
        </div>
        <label
          className="pure-overlay"
          htmlFor="pure-toggle-left"
          data-overlay="left"
        ></label>
      </div>
    </>
  );
};

export default DrawerAuth;
