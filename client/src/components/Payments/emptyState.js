import React, { useState } from "react";
import BankImage from "../../images/bank.svg";
import Modal from "react-modal";
import ImportMoney from "../Wallet/ImportMoney";
import ExportMoney from "../Wallet/ExportMoney";

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

function EmptyStatePayments() {
  const [walletmodalIsOpen, setwalletModalIsOpen] = useState(false);
  const [pickWalletUpdate, setPickWalletUpdate] = useState(false);
  
  const handleWalletToggle = () => {
    setPickWalletUpdate((pickWalletUpdate) => !pickWalletUpdate);
  };

  function openWalletModal() {
    setwalletModalIsOpen(true);
  }

  function closeWalletModal() {
    setwalletModalIsOpen(false);
  }

  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child has-text-centered">
            <img src={BankImage} id="find_friends" />
            <p className="title is-4">Process Payment</p>
            <p className="subtitle is-6">
              Send your first payment, securely and quickly to your friends and
              family. Fund your account, add a photo and find your friends to
              get started.
            </p>
            <div className="content">
              <a
                to="/findafriend"
                type="button"
                className="button"
                id="empty_state_button"
                onClick={openWalletModal}
              >
                Fund My Account
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
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default EmptyStatePayments;
