import React from "react";
import { Link } from "react-router-dom";
import HeroPhoto from "../images/Logos/cover.png";
import NavbarHome from "../components/Navbars/navbarHome";
import DrawerHome from "../components/Drawers/DrawerHome";
import Facebook from '../images/socialMedia/facebook.svg';
import Instagram from '../images/socialMedia/instagram.svg';
import Pinterest from '../images/socialMedia/pinterest.svg';
import "./design/About.css";
import "./design/Home.css";
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
        <div id="drawer-view">
            <DrawerHome />
          </div>
          <img src={HeroPhoto} alt="logo" id="heroPhoto" />
        </div>
      </section>
      <div id="tablet-mobile">
        <div id="nav-view">
          <NavbarHome />
        </div>
        <br />
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-10 is-clearfix columns" id="tile">
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
      <br />
        <br />
      <div>
      <footer className="footer">
        <div className="content">
          <br/>
          <div className="columns">
            <div className="column is-one-fifth" id="resources_info">
              <p className="subtitle is-6">Resources</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
              <p id="footer-links">Contact Us</p>
            </div>
            <div className="column is-one-fifth" id="account_info">
              <p className="subtitle is-6">Account</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
              
            </div>
            <div className="column is-one-fifth" id="other_info">
              <p className="subtitle is-6">Resources</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
            </div>
            <div className="column is-one-fifth" id="social_icons">
              <p className="subtitle is-6">Join Us</p>
              <img id="facebook_link" src={Facebook} alt="facebook"/>
              <img id="instagram_link" src={Instagram} alt="instagram"/>
              <img id="pinterest_link" src={Pinterest} alt="pinterest"/>
            </div>
          </div>
          <hr/>
          <div className="columns">
          <p className="has-text-centered column is-full-width" id="copyright">
            © 2020 Shoestring
          </p>
          </div>
        </div>
      </footer>
    </div> 
    </>
  );
}

export default Home;
