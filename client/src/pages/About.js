import React from "react";
import Navbar from "../components/navbar";
import TheTeam from "./../components/TheTeam";
import './design/About.css'

function About() {
  return (
    <>
    <div id="tablet-mobile">
      <Navbar />
      <br />
      <br />
      <div className="tile is-ancestor" >
        <div className="tile is vertical is-9 is-clearfix columns" id="tile">
          <div className="column">
            <div className="tile is-ancestor">
              <br />
              <div className="tile is-vertical is-10 is-clearfix" id="tile">
                <p className="title is-2">About Shoestring</p>
                <br />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <br/>
            <TheTeam />
          </div>
        </div>
      </div>
      <br />
      </div>
    </>
  );
}

export default About;
