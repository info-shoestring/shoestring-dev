import React from "react";
import { Link } from 'react-router-dom';
import "./design/Home.css";
import HeroPhoto from "../images/Logos/cover.png";
import NavbarHome from "../components/Navbars/navbarHome";
import DrawerHome from '../components/Drawers/DrawerHome';
import "./design/About.css";
// import $ from 'jquery'

function Home() {
  // const []
  // $(window).load(function(){        
  //   $('emailModal').modal('show');
  //    });
  
  return (
    <>
      <section className="hero is-info is-large" id="heroHomePage">
          <div className="hero-body">
            <img src={HeroPhoto} alt="logo" id="heroPhoto" />
          </div>
        </section>
      <div id="tablet-mobile">
        
        <div id="nav-view">
        <NavbarHome />
        </div>
        <div id="drawer-view">
        <DrawerHome/>
        </div>
        <br />
        <br />
        <div className="tile is-ancestor">
          <div className="tile is vertical is-10 is-clearfix columns" id="tile">
            <div className="column">
              <p className="title">Welcome to Shoestring!</p>
              <br />
              <p>
                Shoestring although still in development, is a peer to peer
                payment application that intergrates international payments no
                matter where you are in the world. We realized there is a gap in
                the market for a peer to peer payment system that can integrates
                currency conversion to send payments instantly both locally and
                internationally to anyone, anywhere. Sign up to become a
                founding member of the Shoestring community.
              </p>
              <br />
              <p className="subtitle is-4">
                <strong>Get Started Now</strong>
              </p>
              <div className="columns is-mobile is-multilined">
                <div className="column is-half">
                  <Link to="/sign-up" className="button is-light" id="signup">
                    <p id="">Sign Up</p>
                  </Link>
                </div>
                <div className="column is-half">
                  <Link to="/sign-up" className="button is-light" id="signup">
                    <p>Login</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
