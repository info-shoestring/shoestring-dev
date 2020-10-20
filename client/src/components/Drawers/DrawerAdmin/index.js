import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import httpClient from "../../../httpClient";
import Icon from "@mdi/react";
import { mdiBlur } from '@mdi/js';
import { mdiBankTransfer } from '@mdi/js';
import { mdiAccountMultiplePlus } from "@mdi/js";
import { mdiCurrencyUsdCircle } from "@mdi/js";
import { mdiLogout } from "@mdi/js";
import { mdiPiggyBank } from '@mdi/js';
import "./style.css";
import "../style.css";

const DrawerAdmin = (currentUser) => {
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
        <div
          className="pure-container"
          data-effect="pure-effect-push"
          id="theDRAW"
        >
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
                    to="/admin-summary"
                    className={
                      location.pathname === "/admin-summary"
                        ? "navbar-item title is-3"
                        : "navbar-item title is-3"
                    }
                    id="myprofile-title"
                  >
                    Shoestring
                  </Link>
                  <li key={currentUser._id}>
                  {friendResult.map((item) => {
                      return (
                        <>
                          <figure className="image">
                            <img
                              id="drawer_photo"
                              className="is-rounded "
                              src={item.image}
                              alt="myPhoto"
                            />
                            <p
                              className="subtitle is-4 has-text-centered"
                              id="drawer_name"
                            >
                              {item.name}
                            </p>
                          </figure>
                        </>
                      );
                    })}
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/admin-summary"
                      className={
                        location.pathname === "/admin-summary"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="myprofile-link"
                    >
                      <Icon
                        path={mdiBlur}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Summary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/transaction-history"
                      className={
                        location.pathname === "/transaction-history"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="myprofile-link"
                    >
                      <Icon
                        path={mdiBankTransfer}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/all-users"
                      className={
                        location.pathname === "/all-users"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="findafriend-link"
                    >
                      <Icon
                        path={mdiAccountMultiplePlus}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/total-funds-stored"
                      className={
                        location.pathname === "/total-funds-stored"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="international-link"
                    >
                      <Icon
                        path={mdiPiggyBank}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Stored Funds
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/total-income"
                      className={
                        location.pathname === "/total-income"
                          ? "navbar-item"
                          : "navbar-item"
                      }
                      id="international-link"
                    >
                      <Icon
                        path={mdiCurrencyUsdCircle}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
                      />
                      Profits
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
                        path={mdiLogout}
                        title="Alerts"
                        size={0.85}
                        color="#ffffff"
                        id="alert-icon"
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

export default DrawerAdmin;
