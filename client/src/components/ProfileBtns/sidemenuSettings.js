import React from 'react';

const SidemenuSettings = () => {
    return(
        <>
        <div className="is-2 column" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
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
            <li>
              <a
                href="#cancel_request_data"
                id="settings_menu_links"
              >
                Return
              </a>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default SidemenuSettings;