import React from 'react';
import Icon from "@mdi/react";
import { mdiInformation } from '@mdi/js';
import { mdiLock } from '@mdi/js';
import { mdiCameraPlus } from "@mdi/js";
import { mdiPiggyBank } from '@mdi/js';
import { mdiCloseCircle } from '@mdi/js';
import { mdiAlien } from '@mdi/js';
import './style.css';

const SidemenuSettings = () => {
    return(
        <>
        <div className="column is-one-fifth" id="side_menu">
        <div className="menu sticky" id="menu-sticky">
          <br />
          <ul className="menu-list"
            id="">
            <li>
              <a
                href="#personal-information"
                id="settings_menu_links"
              >
                <Icon
                  path={mdiInformation}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Personal Information
              </a>
            </li>
            <li>
              <a href="#edit-password" id="settings_menu_links">
              <Icon
                  path={mdiLock}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Password
              </a>
            </li>
            <li>
              <a href="#edit-photo" id="settings_menu_links">
              <Icon
                  path={mdiCameraPlus}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Photo
              </a>
            </li>
            <li>
              <a
                href="#edit-bank-informaion"
                id="settings_menu_links"
              >
                <Icon
                  path={mdiPiggyBank} 
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Bank Information
              </a>
            </li>
            <li>
              <a
                href="#cancel_request_data"
                id="settings_menu_links"
              >
                <Icon
                  path={mdiCloseCircle}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Cancel My Account
              </a>
            </li>
            <li>
              <a
                href="#cancel_request_data"
                id="settings_menu_links"
              >
                <Icon
                  path={mdiAlien}
                  title="Summary"
                  size={0.95}
                  id="admin_icons"
                />
                Request My Data
              </a>
            </li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default SidemenuSettings;