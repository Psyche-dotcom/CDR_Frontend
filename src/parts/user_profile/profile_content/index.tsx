import React from "react";
import HiddenCredential from "../hidden_content";
import ConnectionDetails from "../connection_details";
import ProfileInformation from "../profile_information";
import ProfilePasswordChange from "../profile_password_change";
import ProfileTImeZone from "../timezone";
import ThemeChange from "../theme_change";

const ProfileContent = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <HiddenCredential />
      <ConnectionDetails />
      <ProfileInformation />
      <ProfilePasswordChange />
      <ProfileTImeZone />
      <ThemeChange />
    </div>
  );
};

export default ProfileContent;
