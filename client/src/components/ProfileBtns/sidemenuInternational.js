import React from 'react';
import './style.css';

const SettingsMenuInternational = () => {
    return(
        <>
        <div className="column is-one-fifth" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
          <ul className="menu-list"
            >
            <li>
            <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                My Wallet
              </a>
            </li>
            <br/>
            <li>
            <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                Additional Item
              </a>
            </li>
            <br/>
            <li>
            <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                Find Friends
              </a>
            </li>
            <br/>
            <li>
              <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default SettingsMenuInternational;