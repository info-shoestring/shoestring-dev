import React from 'react';
import './style.css';

const SettingsMenuInternational = () => {
    return(
        <>
        <div className="column is-one-fifth" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
          <ul className="menu-list"
            id="settings_menu_links">
            <li>
              <a
                href="#personal-information"
                id="settings_menu_links"
              >
                Personal Information
              </a>
            </li>
            <li>
              <a href="#edit-password" id="settings_menu_links">
                Password
              </a>
            </li>
            <li>
              <a href="#edit-photo" id="settings_menu_links">
                Photo
              </a>
            </li>
            <li>
              <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                Bank Information
              </a>
            </li>
            <li>
              <a
                href="#cancel_request_data"
                id="settings_menu_links"
              >
                Cancel My Account
              </a>
            </li>
            <li>
              <a
                href="#cancel_request_data"
                id="settings_menu_links"
              >
                Request My Data
              </a>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default SettingsMenuInternational;