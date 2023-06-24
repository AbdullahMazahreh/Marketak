import React, { Fragment, useState } from "react";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [newAccount, setNewAccount] = useState({
    email: "",
    username: "",
    password: "",
    image:
      "https://cdn.discordapp.com/attachments/1112627096804655246/1121372700796014603/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix-removebg-preview.png",
    previousorders: [],
    currentcard: [],
    darktheme: false,
  });

  // const usernameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  // const [showValidation, setshowValidation] = useState(false);
  // const [usernameValidation, setusernameValidation] = useState(false);
  // const [isPasswordValid, setIsPasswordValid] = useState(false);
  // const [EightCharPassword, setEightCharPassword] = useState(false)
  // const [sympolPassword, setsympolPassword] = useState(false);
  // const [CapitalLetter, setCapitalLetter] = useState(false);
  // const [changeUsernameValidation, setchangeUsernameValidation] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [emailValidation, setemailValidation] = useState(false);
  const [passwordValidation, setpasswordValidation] = useState(false);
  const [Color, setColor] = useState("red");

  const userNameHandler = (e) => {
    const value = e.target.value;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      username: value,
    }));
    // changeColorUsername();
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      email: value,
    }));
    changeColorEmail();
  };

  const HandelPassword = (e) => {
    const value = e.target.value;
    setNewAccount((prevAccount) => ({
      ...prevAccount,
      password: value,
    }));
    changeColorPassword();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newAccountToBeStored = newAccount;
    axios.post("http://localhost:5001/users", newAccountToBeStored);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const changeColorEmail = (e) => {
    if (newAccount.email.length === 0) {
      setColor("red");
    }
    if (newAccount.email.match(emailRegex)) {
      console.log(newAccount.email);
      setColor("green");
    }
    if (!newAccount.email.match(emailRegex)) {
      setColor("red");
    }
  };

  const changeColorPassword = (e) => {
    if (newAccount.password.length === 0) {
      setColor("red");
    }
    if (newAccount.password.match(passwordRegex)) {
      console.log(newAccount.password);
      setColor("green");
    }
    if (!newAccount.password.match(passwordRegex)) {
      setColor("red");
    }
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
              />
              <input
                type="text"
                placeholder="Email"
                className="register-input-field"
                onChange={(e) => emailHandler(e)}
                onFocus={() => {
                  setemailValidation(true);
                }}
                onBlur={() => {
                  setemailValidation(false);
                  changeColorPassword();
                }}
              />
              <div className="passwordFelid">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="register-input-field passwordFelid"
                  onChange={HandelPassword}
                  onFocus={() => {
                    setpasswordValidation(true);
                  }}
                  onBlur={() => {
                    setpasswordValidation(false);
                    changeColorEmail();
                  }}
                />
                <i
                  class="fa fa-eye"
                  aria-hidden="false"
                  onMouseDown={togglePasswordVisibility}
                ></i>
              </div>
              <Link to={"/Login"}>
                {" "}
                <span id="already">I have already registered</span>
              </Link>
              <input
                type="submit"
                value="Sign Up"
                className="register-input-submit"
                onClick={(e) => submitHandler(e)}
              />
            </form>
            {emailValidation ? (
              <ul>
                <li className={Color}>
                  Email have to have '@(gmail.com, net.com, ect)'
                </li>
              </ul>
            ) : null}
            {passwordValidation ? (
              <ul>
                <li className={Color}>At least 8 chars</li>
                <li className={Color}>At least one symbol</li>
                <li className={Color}>At least one Capital letter</li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
