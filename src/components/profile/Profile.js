import React, { Fragment, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { Weather } from "../Index";

function Profile() {
  const [isSelected, setIsSelected] = useState("settings");
  const isSelectedHandler = (e) => {
    setIsSelected(e.target.id);
  };
  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile-links">
          <h2 className="dashboard-title">My Profile</h2>
          <div className="profile-links-container">
            <Link
              id="settings"
              className={
                isSelected === "settings" ? "profile-nav active" : "profile-nav"
              }
              onClick={(e) => isSelectedHandler(e)}
            >
              Account settings
            </Link>
            <Link
              id="orders"
              className={
                isSelected === "orders" ? "profile-nav active" : "profile-nav"
              }
              onClick={(e) => isSelectedHandler(e)}
            >
              Previous orders
            </Link>
          </div>
          <Weather />
        </div>
        <div className="profile-data"></div>
      </div>
    </Fragment>
  );
}

export default Profile;
