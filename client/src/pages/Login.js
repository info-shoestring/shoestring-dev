import React from "react";
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import UserLogin from "../components/Login/User";
// import AdminLogin from "../components/Login/Admin";
import Footer from "../components/footer";
import "./design/About.css";
import "./design/Home.css";
import "./design/Contact.css";


const Login = () => {
  // const [pickLogin, setPickLogin] = useState(false);
  // const handleLoginPick = () => {
  //   setPickLogin((pickLogin) => !pickLogin);
  // };
  //Render the form and display error when error occurs
  return (
    <>
      <section className="hero is-info" id="heroHomePage">
        <div className="theyBothDrop" id="drawer-view">
          <DrawerHome />
        </div>
        <div className="hero-body"></div>
      </section>
      <div className="adifferentfoot" id="tablet-mobile">
        <div id="nav-view">
          <NavbarHome />
          <br />
        </div>
        <br />
        <br />
        <UserLogin/>
      </div>
      <br />
      <br />
      <div id="login-footer-only">
        <Footer />
      </div>
    </>
  );
};
export default Login;
