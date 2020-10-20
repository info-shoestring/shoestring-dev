import React, { useState, useEffect } from  'react';
import DrawerAuth from '../components/Drawers/DrawerAuth';
import NavbarAuth from '../components/Navbars/NavBarAuth';
import SideMenuInternational from '../components/ProfileBtns/sidemenuInternational';
import InternationalProfile from '../components/International';
import $ from "jquery";
import httpClient from "../httpClient";

function International (){
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
    
    return(
        <>
      {currentUserObj !== null ? (
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
                <SideMenuInternational/>
                  <article className="tile is-child notification">
                    <div className="columns">
                      <div id="editSettings">
                        <br/>
                        
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
      ) : (
        window.location.replace("/")
      )}
    </>
    )
} 

export default International;