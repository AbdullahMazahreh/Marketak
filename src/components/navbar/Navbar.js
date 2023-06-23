import React, { Fragment } from "react";
import logo from "./marketak-high-resolution-logo-black-on-transparent-background.png";
import "./navbar.css";
import {Routes, Route,Link } from 'react-router-dom';
import { Products, Home, Register ,Login} from "../Index";
import { BsSun } from "react-icons/bs";

function Navbar() {
  return (
    <Fragment>
      <header>
        <div className="header-leftside">
          <img src={logo} alt="..." />
        </div>
        <div className="header-middleside">
          <Link className="link-home" to="/">
            Home
          </Link>
          <Link className="link-products" to="/products">
            Products
          </Link>
          <div className="link-contactus">Contact Us</div>
        </div>
        <div className="header-rightside">
          <div className="search-container">
            <svg
              width="17"
              height="17"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8007 20.8121L16.1182 15.2204C17.6063 13.6037 18.5206 11.4655 18.5206 9.1127C18.5199 4.07957 14.3742 0 9.25993 0C4.14564 0 0 4.07957 0 9.1127C0 14.1458 4.14564 18.2254 9.25993 18.2254C11.4697 18.2254 13.4964 17.4611 15.0883 16.1904L20.7929 21.8042C21.0708 22.078 21.5221 22.078 21.8001 21.8042C22.0787 21.5304 22.0787 21.0859 21.8007 20.8121ZM9.25993 16.8234C4.93268 16.8234 1.42477 13.3712 1.42477 9.1127C1.42477 4.85421 4.93268 1.40204 9.25993 1.40204C13.5872 1.40204 17.0951 4.85421 17.0951 9.1127C17.0951 13.3712 13.5872 16.8234 9.25993 16.8234Z"
                fill="#232323"
              />
            </svg>
          </div>
          <div className="cart-container">
            <svg
              width="17"
              height="17"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7354 2.8877C22.6101 2.73116 22.4205 2.64005 22.22 2.64005H4.65429L4.16309 0.511582C4.09395 0.212131 3.8273 0 3.51999 0H0.659989C0.295518 0 0 0.295518 0 0.660034C0 1.02455 0.295518 1.32002 0.659989 1.32002H2.99495L6.32918 15.7684C6.39826 16.0679 6.66496 16.28 6.97227 16.28H20.196C20.5605 16.28 20.856 15.9845 20.856 15.62C20.856 15.2555 20.5604 14.96 20.196 14.96H7.49735L6.9897 12.76H20.24C20.5487 12.76 20.8162 12.5461 20.8839 12.2449L22.8639 3.44491C22.9079 3.24927 22.8606 3.04429 22.7354 2.8877ZM19.712 11.44H6.68507L4.95892 3.96002H21.395L19.712 11.44Z"
                fill="#232323"
              />
              <path
                d="M9.68002 17.1599C8.34565 17.1599 7.26001 18.2455 7.26001 19.5799C7.26001 20.9143 8.3456 21.9999 9.68002 21.9999C11.0144 21.9999 12.1 20.9143 12.1 19.5799C12.1 18.2455 11.0144 17.1599 9.68002 17.1599ZM9.68002 20.6799C9.07347 20.6799 8.58003 20.1865 8.58003 19.5799C8.58003 18.9734 9.07347 18.4799 9.68002 18.4799C10.2866 18.4799 10.78 18.9734 10.78 19.5799C10.78 20.1865 10.2866 20.6799 9.68002 20.6799Z"
                fill="#232323"
              />
              <path
                d="M17.5999 17.1599C16.2656 17.1599 15.1799 18.2455 15.1799 19.5799C15.1799 20.9143 16.2655 21.9999 17.5999 21.9999C18.9343 21.9999 20.0199 20.9143 20.0199 19.5799C20.0199 18.2455 18.9344 17.1599 17.5999 17.1599ZM17.5999 20.6799C16.9934 20.6799 16.5 20.1865 16.5 19.58C16.5 18.9734 16.9934 18.48 17.5999 18.48C18.2065 18.48 18.6999 18.9734 18.6999 19.58C18.6999 20.1865 18.2065 20.6799 17.5999 20.6799Z"
                fill="#232323"
              />
            </svg>
          </div>
          <Link to={'Login'}><button className="signin-btn">Sign In</button></Link>
          <div className="theme-toggler">
            <BsSun className="BsSun" />
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Fragment>
  );
}

export default Navbar;
