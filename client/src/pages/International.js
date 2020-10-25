import React, { useState, useEffect } from "react";
import DrawerAuth from "../components/Drawers/DrawerAuth";
import NavbarAuth from "../components/Navbars/NavBarAuth";
import SideMenuInternational from "../components/ProfileBtns/sidemenuInternational";
import moment from "moment";
import httpClient from "../httpClient";
import "./design/CurrencyConverter.css"
;
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
                              <hr />
                              <p className="subtitle is-6" id="member">
                                Member Since: {createdDate}
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

                        <div class="tile is-ancestor">
                          <div class="tile is-parent">
                            <article class="tile is-child box">
                              <p class="title is-4">Country Codes</p>
                              <p class="subtitle is-6">Currencies supported on Shoestring but country codes.</p>
                              <div class="content tile" >
                              <ul type="1" id="red-hat">
                                    <li>    AUD = Australian Dollar</li><li>    HKD = Hong Kong Dollar</li>
                                    <li>    EUR = Euro</li> <li>    ISK = Icelandic Króna</li>
                                    <li>    CHF = Swiss Franc</li> <li>    PHP = Philippine Peso</li>
                                    <li>    CNY = Chinese Yuan</li> <li>    DKK = Danish Krone</li>
                                    <li>    GBP = British Pound</li> <li>    HUF = Hungarian Forint</li>
                                    <li>    JPY = Japanese Yen</li> <li>    CZK = Czech Republic Koruna</li>
                                    <li>    CAD = Canadian Dollar</li> <li>    RON = Romanian Leu</li>
                                    <li>    USD = US Dollar</li> <li>    SEK = Swedish Krona</li>
                                    <li>    IDR = Indonesian Rupiah</li> <li>    INR = Indian Rupee</li>
                                    <li>    BRL = Brazilian Real</li> <li>    RUB = Russian Ruble</li>
                                    <li>    HRK = Croatian Kuna</li> <li>    THB = Thai Baht</li>
                                    <li>    SGD = Singapore Dollar</li> <li>    PLN = Polish Zloty</li>
                                    <li>    BGN = Bulgarian Lev</li> <li>    TRY = Turkish Lira</li>
                                    <li>    NOK = Norwegian Krone</li> <li>    NZD = New Zealand Dollar</li>
                                    <li>    ZAR = South African Rand</li> <li>    MXN = Mexican Peso</li>
                                    <li>    ILS = Israeli Shekel</li>
                                    <li>    KRW = Kuwaiti Dinar</li>
                                    <li>    MYR = Malaysian Ringgit</li>
                                </ul>
                              </div>
                            </article>
                          </div>
                          <div class="tile is-parent is-8">
                            <article class="tile is-child box">
                              <p class="title is-4">Currency Converter</p>
                              <p class="subtitle is-6">Check up todate currency exchange</p>
                              <div class="content">
                              
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
