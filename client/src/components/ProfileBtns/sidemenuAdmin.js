import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMolecule } from "@mdi/js";
import { mdiBankTransfer } from "@mdi/js";
import { mdiAccountMultiplePlus } from "@mdi/js";
import { mdiPiggyBank } from "@mdi/js";
import { mdiCurrencyUsdCircle } from "@mdi/js";
import "./style.css";

const SidemenuSettings = () => {

  return (
    <>
      <div className="column is-one-fifth" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
          <ul
            className="menu-list"
          >
            <li>
              <Link 
              to="/admin-summary"
              id="settings_menu_links"
              >
                <Icon
                  path={mdiMolecule}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Summary
              </Link>
            </li>
            <li>
              <Link to="/transaction-history" id="settings_menu_links">
                <Icon
                  path={mdiBankTransfer}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Transactions
              </Link>
            </li>
            <li>
              <Link to="/all-users" id="settings_menu_links">
                <Icon
                  path={mdiAccountMultiplePlus}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                User
              </Link>
            </li>
            <li>
              <Link to="/total-funds-stored" id="settings_menu_links">
                <Icon
                  path={mdiPiggyBank}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Stored Funds
              </Link>
            </li>
            <li>
              <Link to="/total-income" id="settings_menu_links">
                <Icon
                  path={mdiCurrencyUsdCircle}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Profits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidemenuSettings;
