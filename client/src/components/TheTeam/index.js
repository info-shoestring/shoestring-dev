import React from "react";
import Sile from "../../images/Team/Sile.png";
import Cory from "../../images/Team/Cory.png";
import "./style.css";

function TheTeam() {
  return (
    <>
    <br/>
    <div className="tile is-ancestor">
      <br/>
      <div className="tile is-vertical is-10 is-clearfix" id="tile">
        <p className="title is-2" id="team">Meet the Current Team</p>
        <br />
        <div className="columns">
          <div className="column is-one-fourth" id="photo-placement">
            <a
              href="https://github.com/cmarshman"
              id="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Cory} alt="Cory" id="aboutPhoto" />
            </a>
          </div>
          <div className="column is-three-fourths">
            <p className="title is-3" id='change-me'>
              <br />
              Cory Marshman
            </p>
            <p className="subtitle is-5" id='change-me'>CEO and Cofounder</p>
            <p id='change-me'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <br />
        <div className=" columns">
          <div className="column is-three-fourths">
            <p className="title has-text-right" id='change-me'>
              <br />
              Sile Kiman
            </p>
            <p className="subtitle has-text-right" id='change-me'>CTO and Cofounder</p>
            <p className="has-text-right" id='change-me'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="column is-one-fourth" id="photo-placement">
            <a
              href="https://github.com/Sile-Kiman"
              id="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Sile} alt="Sile" id="aboutPhoto" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TheTeam;
