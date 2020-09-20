import React from "react";
import TheTeam from "./../components/TheTeam";
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import "./design/About.css";
import "./design/Home.css";

function About() {
  
  return (
    <>
      <section className="hero is-info" id="heroHomePage">
      <div id="drawer-view">
            <DrawerHome />
          </div>
        <div className="hero-body">
        </div>
      </section>
      <div id="tablet-mobile">
        <div id="nav-view">
          <NavbarHome />
          <br/>
        </div>
        <br />
        <br />
        <div className="tile is-ancestor">
          <div className="tile is vertical is-9 is-clearfix columns" id="tile">
            <div className="column">
              <div className="tile is-ancestor">
                <br />
                <div className="tile is-vertical is-10 is-clearfix" id="tile">
                  <p className="title is-2">About Shoestring</p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <br />
              <TheTeam />
              <br />
              <p className="title is-2" id="team">
                Privacy, Security & Terms of Use
              </p>
              <p className="title is-4">Privacy Policy</p>
              <p className="title is-4">Terms of Use</p>
              <p className="title is-4">How do you protect my Financial Information?</p>
              <p className="title is-4">How do you protect my Account?</p>
              <p className="title is-4">How can I better protect myself?</p>
              <p className="title is-4">Questions</p>
              
            </div>
          </div>
        </div>
        <br />
      </div>
      <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            © 2020 Shoestring
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default About;
