import React from "react";
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import ContactForm from "../components/contactForm";
import "./design/Home.css";

function Contact() {
  return (
    <>
      <section className="hero is-info" id="heroHomePage">
      <div id="drawer-view">
            <DrawerHome />
          </div>
        <div className="hero-body">
        </div>
      </section>
      <div id="tablet-mobile">
        <div id="nav-view">
          <NavbarHome />
          <br />
        </div>
        <br />
        <br />
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
