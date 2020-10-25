import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ImportMoney from "../Wallet/ImportMoney";
import ExportMoney from "../Wallet/ExportMoney";
import AddImage from "../AddImage";
import FriendCardModal from "../FriendCardModal";
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

function Dropdown() {
  const [walletmodalIsOpen, setwalletModalIsOpen] = useState(false);
  const [pickWalletUpdate, setPickWalletUpdate] = useState(false);
  const handleWalletToggle = () => {
    setPickWalletUpdate((pickWalletUpdate) => !pickWalletUpdate);
  };
  const [photomodalIsOpen, setphotoModalIsOpen] = useState(false);
  const [friendmodalIsOpen, setfriendModalIsOpen] = useState(false);

  function openWalletModal() {
    setwalletModalIsOpen(true);
  }
  function openPhotoModal() {
    setphotoModalIsOpen(true);
  }
  function openFriendModal() {
    setfriendModalIsOpen(true);
  }

  function closeWalletModal() {
    setwalletModalIsOpen(false);
  }

  function closePhotoModal() {
    setphotoModalIsOpen(false);
  }

  function closeFriendModal() {
    setfriendModalIsOpen(false);
  }

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-trigger">
          <button
            className="button"
            onClick={() => {
              javascript: document
                .querySelector(".dropdown")
                .classList.toggle("is-active");
            }}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Menu</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a
              onMouseDown={openWalletModal}
              onClick={() => {
                javascript: document
                  .querySelector(".dropdown")
                  .classList.toggle("is-active");
              }}
              className="dropdown-item"
            >
              My Wallet
            </a>
            <form>
              <Modal
                isOpen={walletmodalIsOpen}
                onRequestClose={closeWalletModal}
                style={customStyles}
                contentLabel="Send Money Modal"
              >
                <div className="modal-card">
                  <header className="modal-card-head">
                    <button
                      className="button"
                      id="skinyCat"
                      onClick={handleWalletToggle}
                    >
                      {pickWalletUpdate
                        ? "Click to add money to your wallet"
                        : "Click to deposit money in your bank account"}
                    </button>
                    <button
                      className="delete"
                      aria-label="close"
                      onClick={closeWalletModal}
                    ></button>
                  </header>
                  {!pickWalletUpdate ? (
                    <div id="funnyCat">
                      <ImportMoney />
                    </div>
                  ) : (
                    <div id="funnyCat">
                      <ExportMoney />
                    </div>
                  )}
                  <footer className="modal-card-foot">
                    <button
                      className="button is-light"
                      onClick={closeWalletModal}
                    >
                      Cancel
                    </button>
                  </footer>
                </div>
              </Modal>
            </form>
            <a
              onMouseDown={openPhotoModal}
              onClick={() => {
                javascript: document
                  .querySelector(".dropdown")
                  .classList.toggle("is-active");
              }}
              className="dropdown-item"
            >
              Add a Photo
            </a>
            <form>
                <Modal
                  isOpen={photomodalIsOpen}
                  onRequestClose={closePhotoModal}
                  style={customStyles}
                  contentLabel="Send Money Modal"
                >
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <button
                        className="delete"
                        aria-label="close"
                        onClick={closePhotoModal}
                      ></button>
                    </header>
                    <div id="sillyCat">
                      <AddImage />
                    </div>
                    <footer className="modal-card-foot">
                      <button
                        className="button is-light"
                        onClick={closePhotoModal}
                      >
                        Cancel
                      </button>
                    </footer>
                  </div>
                </Modal>
              </form>
            <a
              onMouseDown={openFriendModal}
              onClick={() => {
                javascript: document
                  .querySelector(".dropdown")
                  .classList.toggle("is-active");
              }}
              className="dropdown-item"
            >
              My Friends
            </a>
            <form>
                <Modal
                  isOpen={friendmodalIsOpen}
                  onRequestClose={closeFriendModal}
                  style={customStyles}
                  contentLabel="Send Money Modal"
                >
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <button
                        className="delete"
                        aria-label="close"
                        onClick={closeFriendModal}
                      ></button>
                    </header>
                    <div id="sillyCat">
                      <FriendCardModal />
                    </div>
                    <footer className="modal-card-foot">
                      <button
                        className="button is-light"
                        onClick={closeFriendModal}
                      >
                        Cancel
                      </button>
                      <Link
                        to="/findafriend"
                        type="button"
                        className="button"
                        id="cat"
                      >
                        Find More Friends
                      </Link>
                    </footer>
                  </div>
                </Modal>
              </form>
            <a
              href="/settings"
              onClick={() => {
                javascript: document
                  .querySelector(".dropdown")
                  .classList.toggle("is-active");
              }}
              className="dropdown-item"
            >
              Settings
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
