import React, { useState } from "react";
import AddImage from "../AddImage";
import UserPhoto from "../../images/photograph.svg";
import Modal from "react-modal";

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

function ProfileImageEmptyState() {
  const [photomodalIsOpen, setphotoModalIsOpen] = useState(false);

  function openPhotoModal() {
    setphotoModalIsOpen(true);
  }

  function closePhotoModal() {
    setphotoModalIsOpen(false);
  }
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child has-text-centered">
            <img src={UserPhoto} id="find_friends" />
            <p className="title is-4">Personalize with a photo</p>
            <p className="subtitle is-6">
              Send your first payment, securely and quickly to your friends and
              family. Fund your account, add a photo and find your friends to
              get started.
            </p>
            <div className="content">
              <a
                type="button"
                className="button"
                id="empty_state_button"
                onClick={openPhotoModal}
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
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default ProfileImageEmptyState;
