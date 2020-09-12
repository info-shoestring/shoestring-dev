import React from "react";
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import ContactForm from "../components/contactForm";
import "./design/Home.css";

function Contact() {

    return (
    <>
      <section className="hero is-info is-large" id="heroHomePage">
        <div className="hero-body">
          <div id="drawer-view">
            <DrawerHome />
          </div>
        </div>
      </section>
      <div id="tablet-mobile">
        <div id="nav-view">
          <NavbarHome />
          <br/>
        </div>
        <br />
        <br />
      <div id="tablet-mobile">
        <ContactForm />
      </div>
      </div>
    </>
  );
}

export default Contact;
