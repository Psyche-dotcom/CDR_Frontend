"use client";
import React, { useState } from "react";

const CookieAcceptBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAllow = () => {
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="cookieAcceptBar" className="cookieAcceptBar">
      <div className="custom-container">
        <div className="text float-left mr-5">
          <img src="/images/cookies.svg" alt="Cookies" />
          <p>
            We use <a href="#">cookies</a> to make sure you can have the best
            experience on our website. <br />
            If you continue to use this site we assume that you will be happy
            with it.
          </p>
        </div>
        <div className="buttons-cookie">
          <button className="allow-btn" id="allowbtn" onClick={handleAllow}>
            Allow
          </button>
          <button
            className="decline-btn"
            id="declinebtn"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieAcceptBar;
