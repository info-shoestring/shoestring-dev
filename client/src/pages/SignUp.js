import React from "react";
import "../pages/design/signup.css";
import httpClient from "../httpClient";
import $ from "jquery";
import * as Yup from "yup";
import { useFormik } from "formik";
import Footer from "../components/footer"
import DrawerHome from "../components/Drawers/DrawerHome";
import NavbarHome from "../components/Navbars/navbarHome";
import "./design/About.css";
import "./design/Home.css";

//Setup  validation condition on the schema using Yup
const validationSchenma = Yup.object({
  name: Yup.string().email().required(),
  phone: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  checked: Yup.boolean().required(),
});

let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailVal = /.+@.+\..+/;

//Function to handle  user sign-up
function SignUp(user) {
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
      name: "",
      phone: "",
      city: "",
      state: "",
      email: "",
      password: "",
      friends: "",
      image: "",
      sentTransactions: "",
      receivedTransactions: "",
      sentBankTransactions: "",
      receivedBankTransactions: "",
      plaidToken: "",
      institution: "",
      accountType: "",
      balance: 0.0,
      message: "",
      amount: 0.0,
      message: "",
      checked: false,
    },
    validationSchenma,
    // Handles updating component state when the user types into the input field
    onSubmit(values) {
      handleFormOnsubmit(values);
    },
  });

  //Function to reset the form to empty fields
  const clearForm = () => {
    window.location.reload();
  };

  // Does a post to the signup route. If successful, we are redirected to the login page
  // Otherwise we log   errors
  function handleFormOnsubmit(evt) {
    evt.preventDefault();
    httpClient
      .signUp({
        name: values.name,
        phone: values.phone,
        city: values.city,
        state: values.state,
        email: values.email,
        password: values.password,
        friends: values.friends,
        image: values.image,
        sentTransactions: values.sentTransactions,
        receivedTransactions: values.receivedTransactions,
        sentBankTransactions: values.sentBankTransactions,
        receivedBankTransactions: values.receivedBankTransactions,
        plaidToken: values.plaidToken,
        institution: values.institution,
        accountType: values.accountType,
        balance: values.balance,
        amount: values.amount,
        message: values.message,
        checked: values.checked,
      })
      .then((user) => {
        console.log("user", user);
        if (user) {
          window.location.replace("/login");
          this.props.onSignUpSuccess(user);
          this.props.history.push("/");
        }
        $("#errorMsg").attr("style", "color:red");
        $("#errorMsg").text("An error occured please review your entries");
        return;
      })
      .catch((err) => console.log("err", err));
  }

  // render the Form and handle validations
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
        <form onSubmit={handleSubmit}>
          <div id="errorMsg"></div>
          <div className="tile is-ancestor">
            <div className="tile is vertical is-7 box" id="tile">
              <div className="tile is-parent">
                <article className="tile is-child notification is-dark" id="contact_container">
                  <p className="title" id="formTitle">
                    Sign Up
                  </p>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="name"
                        placeholder="Name (required)"
                        value={values.name}
                      />
                      {values.name.length < 1 && touched.name && "errors" ? (
                        <p className="errMsg">Please enter your name</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Phone</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="phone"
                        placeholder="555-555-5555 (required)"
                        value={values.phone}
                      />
                      {!values.phone.match(phoneno) &&
                      touched.phone &&
                      "errors" ? (
                        <p className="errMsg">Please enter a valid Phone</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">City</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="city"
                        placeholder="City (Not required)"
                        value={values.city}
                      />
                      {values.city.length < 2 && touched.city && "errors" ? (
                        <p className="errMsg">Please enter a valid City</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">State</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="state"
                        placeholder="State (Not required)"
                        value={values.state}
                      />
                      {values.state.length < 2 && touched.state && "errors" ? (
                        <p className="errMsg">Please enter a valid State</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input "
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="email"
                        placeholder="Email (required)"
                        value={values.email}
                      />
                      {!values.email.match(emailVal) &&
                      touched.email &&
                      "errors" ? (
                        <p className="errMsg">Please enter a valid Email</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <p className="control">
                      <input
                        className="input "
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="password"
                        placeholder="Password (required)"
                        value={values.password}
                      />
                      {values.password.length < 8 &&
                      touched.password &&
                      "errors" ? (
                        <p className="errMsg">Please enter a valid Password</p>
                      ) : (
                        ""
                      )}
                    </p>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input
                          id="bluefish"
                          type="checkbox"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="checked"
                          value={values.checked}
                        />
                        I agree to the <a href="#"> terms and conditions</a>
                        {values.checked !== true && "errors" ? (
                          <p className="errMsg">
                            Please check the box to enable the submit button{" "}
                          </p>
                        ) : (
                          ""
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <button
                        className="button is-light"
                        onClick={handleFormOnsubmit}
                        disabled={!values.phone.match(phoneno)}
                        disabled={!values.email.match(emailVal)}
                        disabled={!values.checked && "errors"}
                        id="twofish"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="control">
                      <button
                        className="button is-light"
                        onClick={clearForm}
                        id="rainbowfish"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </form>
        </div>
        <br/>
      <br/>
      <br/>
        <Footer/>
    </>
  );
}
export default SignUp;
