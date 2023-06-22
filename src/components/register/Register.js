import React, { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";

function Register() {
  const [newAccount, setNewAccount] = useState({
    email: "",
    username: "",
    password: "",
    image:
      "https://cdn.discordapp.com/attachments/1112627096804655246/1121372700796014603/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix-removebg-preview.png",
    previousorders: [],
    currentcard: [],
    darttheme: false,
  });
  const userNameHandler = (e) => {
    setNewAccount({ ...newAccount, username: e.target.value });
  };
  const emailHandler = (e) => {
    setNewAccount({ ...newAccount, email: e.target.value });
  };
  const passowrdHandler = (e) => {
    setNewAccount({ ...newAccount, password: e.target.value });
  };
  const submitHandler = (e) => {
    const newAccountToBeStored = newAccount;
    axios.post("http://localhost:5001/users", newAccountToBeStored);
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="register-contianer dark-theme">
        <div className="register-leftside">
          <div className="register-content-container">
            <div className="register-name">MARKETAK</div>
            <div className="register-description">
              Your trusted place to buy your products
            </div>
            <button className="register-leftside-button">About Us</button>
          </div>
          <div className="first-cirlce"></div>
          <div className="second-cirlce"></div>
        </div>
        <div className="register-rightside">
          <div className="form-register-container">
            <div className="form-register-title">
              <div className="form-register-title-1">Hello</div>
              <div className="form-register-title-2">
                Sign up to get started
              </div>
            </div>
            <form className="form-register-input-fields">
              <input
                type="text"
                placeholder="User-Name"
                className="register-input-field"
                onChange={(e) => userNameHandler(e)}
              ></input>
              <input
                type="text"
                placeholder="E-Mail"
                className="register-input-field"
                onChange={(e) => emailHandler(e)}
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="register-input-field"
                onChange={(e) => passowrdHandler(e)}
              ></input>
              <input
                type="submit"
                value="Sign Up"
                className="register-input-submit"
                onClick={(e) => submitHandler(e)}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
