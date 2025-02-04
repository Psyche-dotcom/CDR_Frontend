import React from "react";
import ProfileCrumb from "./profile_crumb";
import ProfileContent from "./profile_content";
import Script from "next/script";

const UserProfileMain = () => {
  return (
    <>
      <ProfileCrumb />
      <ProfileContent />
      {/* <Script
        src="/page-script-sample/user-profile.js"
        strategy="afterInteractive"
      ></Script> */}
      <link
        href="/app-assets/vendors/css/forms/selects/select2.min.css"
        rel="stylesheet"
      />
      {/* <Script
        src="/app-assets/input-mask/jquery.mask.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/Scripts/signalr.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://momentjs.com/downloads/moment.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://momentjs.com/downloads/moment-timezone-with-data.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/app-assets/timezone-picker/timezone.js"
        strategy="afterInteractive"
      />
      <Script src="/app-assets/mask/imask.js" strategy="afterInteractive" />
      <Script
        src="/app-assets/page-scripts/profile.js"
        strategy="afterInteractive"
      /> */}
    </>
  );
};

export default UserProfileMain;
