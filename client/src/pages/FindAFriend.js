import React from 'react';
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import FindFriends from '../components/FindFriends';
import "./design/Home.css";
import "./design/About.css";

function FindAFriend(){
    return(
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
        <FindFriends/>
        </div>
        </div>
        
        </>
    );
}

export default FindAFriend;