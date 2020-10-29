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
// import ScrollArrow from '../components/ScrollToTop'
import moment from "moment";
import "../pages/design/signup.css";
import "./design/Settings.css";
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
            <br />
            <div className="outerTile">
              <div className="is-clearfix columns is-centered">
                <Sidemenu />
                <article className="tile is-child notification">
                  <div className="columns">
                    <div className="column is-10 new-shift" id="editSettings">
                      <br />
                      <div className="column is-full" id="friends-container">
                        <div id="dropdown-menu-display">
                          <br />
                          <Dropdown />
                        </div>
                        <Friends />
                      </div>
                      <br/>
                      <div className="column is-full">
                        <div className="tile is-ancestor">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Funds Available:</p>
                              <p className="title is-2 has-text-centered">
                                $ {currentUserObj.balance}
                              </p>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Funds Sent</p>
                              <p className="title is-2 has-text-centered">
                                $ {currentUserObj.balance}
                              </p>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Funds Received</p>
                              <p className="title is-2 has-text-centered">
                                $ {currentUserObj.balance}
                              </p>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div className="column is-full" id="new-design">
                      <div className="tile is-ancestor" >
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                            <div id="profile_info_card">
                              <UserNameCard />
                              <ProfileImage />
                              <hr />
                              <p className="subtitle is-5 has-text-centered" id="member">
                                Member Since: {createdDate}
                              </p>
                            </div>
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child box">
                          <p className="title" >My Transactions</p>
                            <div
                              className="add-className-name"
                              id="profile_cards"
                            >
                              <div className="tile is-vertical is-parent">
                                <div>
                                  <Payments />
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      </div>
                      {/* <ScrollArrow/> */}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      ) : (
        window.location.replace("/")
      )}
    </>
  );
}

export default Landing;
