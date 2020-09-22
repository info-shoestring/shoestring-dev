import React, { useState, useEffect } from "react";
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import SidemenuSettings from "../components/ProfileBtns/sidemenuSettings";
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
            <div id="tablet-mobile-auth">
              <div id="nav-view">
                <NavbarAuth />
                <br />
              </div>
              <br />
            <div className="outerTile">
              <div className="is-clearfix columns is-centered">
                <SidemenuSettings/>
                  <article className="tile is-child notification">
                    <div className="columns">
                      <div id="editSettings">
                        <br/>
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
