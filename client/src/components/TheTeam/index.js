import React, { useState } from "react";
import Modal from "react-modal";
import Sile from "../../images/Team/Sile.png";
import Cory from "../../images/Team/Cory.png";
import "./style.css";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-45%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "#ffffff",
    boxShadow: "6px -4px 70px -9px rgba(0,0,0,0.75)",
  },
};

Modal.setAppElement("#root");

function TheTeam() {
  const [coryModalOpen, setCoryModalOpen] = useState(false);
  const [sileModalOpen, setSileModalOpen] = useState(false);

  function openCoryModal() {
    setCoryModalOpen(true);
  }

  function openSileModal() {
    setSileModalOpen(true);
  }

  function closeCoryModal() {
    setCoryModalOpen(false);
  }

  function closeSileModal() {
    setSileModalOpen(false);
  }

  return (
    <>
      <br />
      <div className="tile is-ancestor">
        <br />
        <div className="tile is-vertical is-10 is-clearfix" id="tile">
          <p className="title is-2" id="team">
            Meet the Current Team
          </p>
          <br />
          <div className="columns">
            <div className="column is-one-fourth" id="photo-placement">
              <a type="button" onClick={openCoryModal}>
                <img src={Cory} alt="Cory" id="aboutPhoto" />
              </a>
              <form>
                <Modal
                  isOpen={coryModalOpen}
                  onRequestClose={closeCoryModal}
                  style={customStyles}
                  contentLabel="Cory Info Modal"
                >
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <img src={Cory} alt="Cory" id="modal-photo" />
                      <p className="modal-card-title has-text-weight-bold">Cory Marshman</p>
                      <button
                        className="delete"
                        aria-label="close"
                        onClick={closeCoryModal}
                      ></button>
                    </header>
                    <section className="modal-card-body">
                      
                      <p className="title is-4">
                        CEO and Cofounder 
                      </p>
                      <p className="subtitle is-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      
                      <div className="columns is-multiline is-mobile">
                        <div className="column is-one-half">
                          <a
                            className="button"
                            href="https://github.com/cmarshman"
                            id="github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <i className="fab fa-github-square fa-2x" id="about-icons"></i>  
                            Github</a>
                        </div>
                        <div className="column">
                        <a
                            className="button"
                            href="https://www.linkedin.com/in/cory-marshman-6aba24152/"
                            id="github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <i className="fab fa-linkedin fa-2x" id="about-icons"></i>
                            LinkedIn</a>
                        </div>
                      </div>
                    </section>
                    <footer className="modal-card-foot">
                      <button className="button" onClick={closeCoryModal}>
                        Cancel
                      </button>
                    </footer>
                  </div>
                </Modal>
              </form>
            </div>
            <div className="column is-three-fourths">
              <p className="title is-3" id="change-me">
                <br />
                Cory Marshman
              </p>
              <p className="subtitle is-5" id="change-me">
                CEO and Cofounder
              </p>
              <p id="change-me">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <br />
          <div className=" columns">
            <div className="column is-three-fourths">
              <p className="title has-text-right" id="change-me">
                <br />
                Sile Kiman
              </p>
              <p className="subtitle has-text-right" id="change-me">
                CTO and Cofounder
              </p>
              <p className="has-text-right" id="change-me">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="column is-one-fourth" id="photo-placement">
            <a type="button" onClick={openSileModal}>
                <img src={Sile} alt="Sile" id="aboutPhoto" />
              </a>
              <form>
                <Modal
                  isOpen={sileModalOpen}
                  onRequestClose={closeSileModal}
                  style={customStyles}
                  contentLabel="Sile Info Modal"
                >
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <img src={Sile} alt="Sile" id="modal-photo" />
                      <p className="modal-card-title has-text-weight-bold">Sile Kiman</p>
                      <button
                        className="delete"
                        aria-label="close"
                        onClick={closeSileModal}
                      ></button>
                    </header>
                    <section className="modal-card-body">
                      
                      <p className="title is-4">
                        CTO and Cofounder 
                      </p>
                      <p className="subtitle is-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      
                      <div className="columns is-multiline is-mobile">
                        <div className="column is-one-half">
                          <a
                            className="button"
                            href="https://github.com/Sile-Kiman"
                            id="github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <i className="fab fa-github-square fa-2x" id="about-icons"></i>  
                            Github</a>
                        </div>
                        <div className="column is-one-half">
                        <a
                            className="button"
                            href="https://www.linkedin.com/in/sile-kiman/"
                            id="github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                          <i className="fab fa-linkedin fa-2x" id="about-icons"></i>
                            LinkedIn</a>
                        </div>
                      </div>
                    </section>
                    <footer className="modal-card-foot">
                      <button className="button" onClick={closeSileModal}>
                        Cancel
                      </button>
                    </footer>
                  </div>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheTeam;
