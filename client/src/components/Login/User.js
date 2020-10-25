import React from 'react';
import httpClient from "../../httpClient";
import "../../pages/design/login.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import $ from "jquery";

const validationSchenma = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
  });

const UserLogin = (email, password) => {
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

    return(
        <>
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
        </>
    )
};

export default UserLogin;