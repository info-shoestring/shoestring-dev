import React from 'react';
import NavbarAdminDetails from '../components/Navbars/NavbarAdminDetails';
import DrawerAdmin from "../components/Drawers/DrawerAdmin";
import SidemenuAdmin from "../components/ProfileBtns/sidemenuAdmin";
import TransactionDisplay from "../components/TransactionsDisplay";

const TransactionHistory = () => {
    return(
        <>
        <div>
        <section className="hero is-info" id="heroHomePage">
            <div id="drawer-view">
              <DrawerAdmin />
            </div>
            <div className="hero-body"></div>
          </section>
        <div id="tablet-mobile-auth">
            <div id="nav-view">
              <NavbarAdminDetails />
              <br />
            </div>
            <br />
            <div className="outerTile">
              <div className="is-clearfix columns is-centered">
                <SidemenuAdmin />
                <article className="tile is-child notification">
                  <div className="columns">
                    <div className="column is-10 new-shift" id="editSettings">
                      <br />
                      <p className="title">Transaction Data</p>
                      <p className="subtitle">Aggregate data of transactions on Shoestring</p>
                      <TransactionDisplay/>
                    </div>
                  </div>
                </article>    
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default TransactionHistory;