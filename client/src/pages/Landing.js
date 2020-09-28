import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import Friends from "../components/FriendCard";
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import UserNameCard from "../components/UserNameCard";
import ProfileImage from "../components/ProfileImage";
import Payments from "./../components/Payments";
import Sidemenu from "../components/ProfileBtns/sidemenu";
import Dropdown from "../components/ProfileBtns/dropdown";
import Footer from '../components/footer';
import moment from "moment";
import "./design/About.css";
import "./design/Home.css";
import "./design/Landing.css";

function Landing() {
  const [currentUserObj, setCurrentUserObj] = useState({
    currentUser: httpClient.getCurrentUser(),
  });

  //Load funtion on page load
  useEffect(() => {
    handleFriends();
  }, []);
  //Function to load all currentuser on page load
  const handleFriends = () => {
    httpClient
      .FindAllUser()
      .then((serverResponse) => {
        let currentUserId = currentUserObj.currentUser._id;
        let findFriend = serverResponse.data.find(
          (item) => item._id === currentUserId
        );
        setCurrentUserObj(findFriend);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let createdDate1 = currentUserObj.date;
  console.log(createdDate1);
  let createdDate = moment(createdDate1).format("LL");

  // Render the  all  the  pages on the landing pages
  return (
    <>
      {currentUserObj !== null ? (
        <div>
          <section className="hero is-info" id="heroHomePage">
            <div id="drawer-view">
              <DrawerAuth />
            </div>
            <div className="hero-body"></div>
          </section>
          <div id="tablet-mobile-auth">
            <div id="nav-view">
              <NavbarAuth />
              <br />
            </div>
            <div className="outerTile">
              <div className="is-clearfix is-centered">
                <div className="columns">
                  <div className="column is-one-fifth" id="side-menu-column">
                    <Sidemenu />
                  </div>
                  <div className="column is-full columns is-mobile is-multiline">
                    
                    <div className="column is-full columns" id="profile_cards">
                      <div
                        className="is-two-fifths container column is-fluid"
                        id="purpleDuck"
                      >
                        <div className="tile is-vertical is-parent">
                          <div className="tile box has-text-centered" >
                            <div id="profile_info_card">
                              <UserNameCard />
                              <ProfileImage />
                              <br />
                              <p 
                              >
                                Funds Available: $ {currentUserObj.balance}
                              </p>
                              <p id="member">Member Since: {createdDate}</p>
                              <div 
                                id="dropdown-menu-display"
                                >
                                <br />
                                <Dropdown />
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box container column is-two-fifths" id="transactions_container">
                        <Payments />
                      </div>
                    </div>
                    <div className="column is-full">
                      <Friends />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default Landing;
