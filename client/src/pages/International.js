import React, { useState, useEffect } from "react";
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import SideMenuInternational from "../components/ProfileBtns/sidemenuInternational";
import CurrencyConverter from "../components/CurrencyConverter";
import AvailableCurrency from "../components/CurrencyConverter/AvailableCurrency";
import InternationalFriends from "../components/FriendCard/InternationalFriends";
import moment from "moment";
import httpClient from "../httpClient";
import "./design/CurrencyConverter.css";
function International() {
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
                <SideMenuInternational />
                <article className="tile is-child notification">
                  <div className="columns">
                    <div className="column is-10 new-shift" id="editSettings">
                      <br />
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
                              <p className="title is-4">
                                International Funds Sent
                              </p>
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

                        <div className="tile is-ancestor">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Country Codes</p>
                              <p className="subtitle is-6 ">
                                Currencies supported on Shoestring
                              </p>
                              <div className="content tile">
                                <AvailableCurrency />
                              </div>
                            </article>
                          </div>
                          <div className="tile is-parent is-8">
                            <article className="tile is-child box">
                              <p className="title is-4">Currency Converter</p>
                              <p className="subtitle is-6"></p>
                              <br />
                              <div className="content">
                                <CurrencyConverter />
                              </div>
                            </article>
                          </div>
                        </div>

                        <div className="tile is-ancestor">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">
                                Send Money Internationaly
                              </p>
                              <p className="subtitle is-6">
                                Select from your international connections
                              </p>
                              <InternationalFriends />
                            </article>
                          </div>
                        </div>

                        <div className="tile is-ancestor">
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Transactions Sent</p>
                              <p className="subtitle is-6">
                                
                              </p>
                              <div className="content tile">
                              </div>
                            </article>
                          </div>
                          <div className="tile is-parent">
                            <article className="tile is-child box">
                              <p className="title is-4">Transactions Received</p>
                              <p className="subtitle is-6"></p>
                              <br />
                              <div className="content">
                                
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
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

export default International;
