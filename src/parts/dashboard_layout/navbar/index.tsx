"use client";
import useStoreInApp from "@/zuststand/useStoreInApp";
import React, { useState } from "react";
import UserDropdown from "../user_dropdown";

const Navbar: React.FC = () => {
  const { theme, setTheme } = useStoreInApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const [selectedCulture, setSelectedCulture] = useState("en");

  // Dummy data to replace Razor loops
  const localizationData = [
    { Culture: "en", Title: "English", FlagIcon: "us" },
    { Culture: "fr", Title: "Français", FlagIcon: "fr" },
  ];

  const handleThemeChange = () => setTheme(theme === true ? false : true);
  console.log("theme state", theme);
  return (
    <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-dark bg-primary navbar-shadow navbar-brand-center">
      <div className="navbar-wrapper">
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mobile-menu d-md-none mr-auto">
              <a
                className="mel nav-link nav-menu-main menu-toggle hidden-xs "
                href="#"
                id="ClosenavmobileButton"
              >
                <i className="ft-menu font-large-1"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/dashboard">
                <img
                  className="brand-logo"
                  alt=""
                  src="/app-assets/images/logo/k2m-logo-light.png"
                />
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a
                className="nav-link open-navbar-container"
                data-toggle="collapse"
                data-target="#navbar-mobile"
              >
                <i className="la la-ellipsis-v"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-container content">
          <div className="collapse navbar-collapse" id="navbar-mobile">
            <ul className="nav navbar-nav mr-auto float-left">
              <li className="nav-item d-none d-md-block">
                <a
                  className="nav-link nav-menu-main site-menu menu-toggle hidden-xs"
                  href="#"
                  id="ClosenavButton"
                >
                  <i className="ft-menu"></i>
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav float-right">
              <li className="dropdown dropdown-notification nav-item">
                <a
                  className="nav-link nav-link-label"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <i className="ficon ft-help-circle"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right show">
                  <li className="dropdown-menu-header">
                    <h6 className="dropdown-header m-0">
                      <span className="grey darken-2">Help</span>
                    </h6>
                  </li>
                  <li
                    className="scrollable-container media-list w-100 ps"
                    id="HelpList"
                  ></li>
                  <li className="dropdown-menu-footer">
                    <a
                      className="dropdown-item text-muted text-center layout-help-all-btn"
                      href="/Help"
                    >
                      View All Help
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item themesetting ${
                  theme !== true ? "day-background" : ""
                }`}
                id="color-theme-card"
              >
                <div className="button-con">
                  <label htmlFor="cb1">
                    <img
                      id="dayIcon"
                      src="/app-assets/images/icons/sun2.svg"
                      alt="Day Icon"
                    />
                  </label>
                  <input
                    className="toggle2"
                    id="cb1"
                    type="checkbox"
                    //@ts-ignore
                    checked={theme === true ? "checked" : ""}
                    onChange={handleThemeChange}
                  />
                  <label className="toggle-button2" htmlFor="cb1"></label>
                  <label htmlFor="cb1">
                    <img
                      id="nightIcon"
                      src="/app-assets/images/icons/moon2.svg"
                      alt="Night Icon"
                    />
                  </label>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-label msg-link"
                  href="/dashboard/support"
                  aria-expanded="false"
                >
                  <i className="ficon ft-mail">
                    <span
                      className="tool-badge"
                      style={{ display: "none" }}
                    ></span>
                  </i>
                </a>
              </li>
              <li className="dropdown dropdown-language nav-item">
                <a
                  className="dropdown-toggle nav-link"
                  id="dropdown-flag"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {localizationData
                    .filter((item) => item.Culture === selectedCulture)
                    .map((item) => (
                      <React.Fragment key={item.Culture}>
                        <i
                          className={`flag-icon flag-icon-${item.FlagIcon}`}
                        ></i>{" "}
                        <span className="selected-language">{item.Title}</span>
                      </React.Fragment>
                    ))}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-flag">
                  {localizationData.map((item) => (
                    <a
                      className="dropdown-item"
                      href="#"
                      key={item.Culture}
                      onClick={() => setSelectedCulture(item.Culture)}
                    >
                      <i className={`flag-icon flag-icon-${item.FlagIcon}`}></i>{" "}
                      {item.Title}
                    </a>
                  ))}
                </div>
              </li>
              <UserDropdown />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
