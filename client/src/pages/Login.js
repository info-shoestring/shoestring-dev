import React from "react";
import httpClient from "../httpClient";
import "../pages/design/login.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import $ from "jquery";
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import Footer from "../components/footer";
import "./design/About.css";
import "./design/Home.css";
import "./design/Contact.css";

//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
});

//Function to handle the login form
const Login = (email, password) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchenma,
    onSubmit(values) {
      handleLoginOnsubmit(values);
    },
  });

  //Function to handle submit
  function handleLoginOnsubmit(evt) {
    evt.preventDefault();
    const alluser = { ...values };
    httpClient
      .logIn(alluser)
      .then((user) => {
        console.log("user", user);
        if (user) {
          window.location.replace("/home");
          this.props.onLoginSuccess(user);
          this.props.history.push("/");
        }
        $("#loginerrMsg").attr("style", "color:red", "border: solid 1px");
        $("#loginerrMsg").text(
          "Your Email or Password is incorrect, please check and try again."
        );

        return;
      })
      .catch((err) => console.log("err", err));
  }

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
        <form onSubmit={handleLoginOnsubmit}>
          <div id="loginerrMsg"></div>
          <div className="tile is-ancestor">
            <div className="tile is vertical is-7 box my_foot" id="tile">
              <div className="tile is-parent" id="make_smaller">
                <article
                  className="tile is-child notification is-dark"
                  id="contact_container"
                >
                  <p className="title" id="formTitle">
                    Login
                  </p>
                  <div className="field">
                    <label className="label">Email</label>
                    <p className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        values={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email (required)"
                      />
                      {values.email.length < 10 && touched.email && "errors" ? (
                        <p className="errMsg">Please enter a valid email</p>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        values={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        placeholder="Password (required)"
                      />
                      {values.password.length < 8 &&
                      touched.password &&
                      "errors" ? (
                        <p className="errMsg">Please enter a valid password</p>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button
                        type="submit"
                        id="honey"
                        className="button is-light"
                        disabled={!values.email && !values.password && "errors"}
                      >
                        Login
                      </button>
                      <a href="/reset" className="subtitle" id="resetpwd">
                        Forgot Password
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </form>
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
