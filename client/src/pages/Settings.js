import React, { useState, useEffect } from "react";
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import { FaArrowCircleUp } from "react-icons/fa";
import "../pages/design/signup.css";
import "./design/Settings.css";
import "./design/About.css";
import "./design/Home.css";
import EditSettings from "../components/EditSettings";
import $ from "jquery";
import httpClient from "../httpClient";
import ScrollArrow from '../components/ScrollToTop'

function Settings() {
  useEffect(() => {
    $('a[href^="#"]').on("click", function (event) {
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").stop().animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    });
  });

  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  return (
    <>
      {currentUserObj !== null ? (
        <>
          <div>
            <section className="hero is-info" id="heroHomePage">
              <div id="drawer-view">
                <DrawerAuth />
              </div>
              <div className="hero-body"></div>
            </section>
            <div id="tablet-mobile">
              <div id="nav-view">
                <NavbarAuth />
                <br />
              </div>
              <br />
              <div className="tile is-ancestor">
                <div className="tile is-vertical" id="tile">
                  <article className="tile is-child notification">
                    <div className="columns">
                      <div className="column is-2" id="side_menu">
                        <div className="menu sticky" id="menu-stick">
                          <br />
                          <br />
                          <ul className="menu-list" id="settings_menu_links">
                            <li>
                              <a
                                href="#personal-information"
                                id="settings_menu_links"
                              >
                                Personal Information
                              </a>
                            </li>
                            <li>
                              <a href="#edit-password" id="settings_menu_links">
                                Password
                              </a>
                            </li>
                            <li>
                              <a href="#edit-photo" id="settings_menu_links">
                                Photo
                              </a>
                            </li>
                            <li>
                              <a
                                href="#edit-bank-informaion"
                                id="settings_menu_links"
                              >
                                Bank Information
                              </a>
                            </li>
                            <li>
                              <a
                                href="#cancel_request_data"
                                id="settings_menu_links"
                              >
                                Cancel My Account
                              </a>
                            </li>
                            <li>
                              <a
                                href="#cancel_request_data"
                                id="settings_menu_links"
                              >
                                Request My Data
                              </a>
                            </li>
                            <li>
                              <a
                                href="#cancel_request_data"
                                id="settings_menu_links"
                              >
                                Return
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="editSettings">
                        <EditSettings />
                        <ScrollArrow/>
                      </div>
                      
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default Settings;
