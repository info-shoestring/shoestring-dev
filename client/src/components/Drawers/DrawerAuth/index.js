import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import httpClient from "../../../httpClient";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
import { mdiAccountMultiplePlus } from "@mdi/js";
import { mdiCurrencyEur } from "@mdi/js";
import { mdiBellOutline } from "@mdi/js";
import { mdiCogOutline } from "@mdi/js";
import { mdiLogout } from "@mdi/js";
import "./style.css";
import "../style.css";

const DrawerAuth = (currentUser) => {
  const location = useLocation();

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  const [friendResult, setFriendResult] = useState([{}]);
  // Load the available token on pageload from local storage
  useEffect(() => {
    work();
    handleSearch();
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

  const handleSearch = () => {
    httpClient
      .FindAllUser()

      .then((serverResponse) => {
        setFriendResult(serverResponse.data);
        let currentUserId = currentUserObj.currentUser._id;
        let findImg = serverResponse.data.find(
          (item) => item._id === currentUserId
        );
        setFriendResult([findImg]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {currentUserObj !== null ? (
        <div className="pure-container" data-effect="pure-effect-push" id="theDRAW">
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
                  <li>
                    {friendResult.map((item) => {
                      return (
                        <>
                          <figure className="image is-centered">
                            <img
                              id="drawer_photo"
                              className="is-rounded "
                              src={item.image}
                              alt="myPhoto"
                            />
                            <p className="subtitle is-4 has-text-centered" id="drawer_name">{item.name}</p>
                          </figure>
                        </>
                      );
                    })}
                  </li>
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
                      <Icon
                        path={mdiAccountCircle}
                        title="Alerts"
                        size={0.75}
                        color="#ffffff"
                        id="alert-icon"
                      />
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
                      <Icon
                        path={mdiAccountMultiplePlus}
                        title="Alerts"
                        size={0.75}
                        color="#ffffff"
                        id="alert-icon"
                      />
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
                      <Icon
                        path={mdiCurrencyEur}
                        title="Alerts"
                        size={0.75}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      International Payments
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/alerts"
                      className={
                        location.pathname === "/alerts"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="alerts-link"
                    >
                      <Icon
                        path={mdiBellOutline}
                        title="Alerts"
                        size={0.75}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Alerts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className={
                        location.pathname === "/settings"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="settings-link"
                    >
                      <Icon
                        path={mdiCogOutline}
                        title="Settings"
                        size={0.75}
                        color="#ffffff"
                        id="settings-icon"
                      />
                      Settings
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/"
                      className={
                        location.pathname === "/"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="logout-link"
                      onClick={logOut}
                    >
                      <Icon
                        path={mdiLogout}
                        title="Logout"
                        size={0.75}
                        color="#ffffff"
                        id="settings-icon"
                      />
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
      ) : (
        window.location.replace("/")
      )}
    </>
  );
};

export default DrawerAuth;
