import React from 'react';
import './style.css';
import Facebook from '../../images/socialMedia/facebook.svg';
import Instagram from '../../images/socialMedia/instagram.svg';
import Pinterest from '../../images/socialMedia/pinterest.svg';

function Footer() {

  return (
    <div>
      <footer className="footer">
        <div className="content" >
          <br/>
          <div className="columns" id="footer_info">
            <div className="column is-one-fifth" id="resources_info">
              <p className="footer_title">Resources</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
              <p id="footer-links">Contact Us</p>
            </div>
            <div className="column is-one-fifth" id="account_info">
              <p className="footer_title">Account</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
              
            </div>
            <div className="column is-one-fifth" id="other_info">
              <p className="footer_title">Resources</p>
              <p id="footer-links">Security</p>
              <p id="footer-links">Privacy Policy</p>
              <p id="footer-links">Terms of Use</p>
              <p id="footer-links">FAQ's</p>
            </div>
            <div className="column is-one-fifth" id="social_icons">
              <p className="footer_title">Shoestring Community</p>
              <img id="facebook_link" src={Facebook} alt="facebook"/>
              <img id="instagram_link" src={Instagram} alt="instagram"/>
              <img id="pinterest_link" src={Pinterest} alt="pinterest"/>
            </div>
          </div>
        </div>
        <hr/>
        <div className="columns">
          <p className="has-text-centered column is-full-width" id="copyright">
            © 2020 Shoestring
          </p>
          </div>
      </footer>
    </div> 
  )
};


export default Footer;
