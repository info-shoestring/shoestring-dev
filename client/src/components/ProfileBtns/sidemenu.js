import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Icon from "@mdi/react";
import { mdiWallet } from "@mdi/js";
import { mdiCameraPlus } from "@mdi/js";
import { mdiAccountMultiplePlus } from "@mdi/js";
import { mdiCog } from "@mdi/js";
import ImportMoney from "../Wallet/ImportMoney";
import ExportMoney from "../Wallet/ExportMoney";
import AddImage from "../AddImage";
import FriendCardModal from "../FriendCardModal";
import "./style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-48%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "#ffffff",
    boxShadow: "6px -4px 70px -9px rgba(0,0,0,0.75)",
  },
};

Modal.setAppElement("#root");

function Sidemenu() {
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
      <div className="column is-one-fifth" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
          <ul className="menu-list" id="">
            <li>
              <a onClick={openWalletModal} id="settings_menu_links">
                <Icon
                  path={mdiWallet}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
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
            </li>
            <br/>
            <li>
              <a onClick={openPhotoModal} id="settings_menu_links">
                <Icon
                  path={mdiCameraPlus}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
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
            </li>
            <br/>
            <li>
              <a onClick={openFriendModal} id="settings_menu_links">
                <Icon
                  path={mdiAccountMultiplePlus}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
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
            </li>
            <br/>
            <li>
              <a href="/settings" id="settings_menu_links">
                <Icon
                  path={mdiCog}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
