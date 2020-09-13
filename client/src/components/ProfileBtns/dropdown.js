import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";
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
  return(
      <>
      </>
  )
}

export default Dropdown;