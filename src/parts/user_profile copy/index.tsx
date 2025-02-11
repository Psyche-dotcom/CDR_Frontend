import React from "react";
import ProfileCrumb from "./profile_crumb";
import ProfileContent from "./profile_content";
import Script from "next/script";

const UserProfileMain = () => {
  return (
    <>
      <ProfileCrumb />
      <ProfileContent />

      <link
        href="/app-assets/vendors/css/forms/selects/select2.min.css"
        rel="stylesheet"
      />
    </>
  );
};

export default UserProfileMain;
