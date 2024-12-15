import Link from "next/link";
import React from "react";

const MainMenu: React.FC = () => {
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow menu-border"
      data-scroll-to-active="true"
    >
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className="nav-item">
            <a href="/dashboard" className="menuiconweight">
              <img
                src="/app-assets/images/icons/home-menu.svg"
                alt="Dashboard Icon"
              />
              <span className="menu-title" data-i18n="">
                Dashboard
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/trunk" className="menuiconweight">
              <img
                src="/app-assets/images/icons/chart-menu.svg"
                alt="Trunks Icon"
              />
              <span className="menu-title" data-i18n="">
                Trunks
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/profile" className="menuiconweight">
              <img
                src="/app-assets/images/icons/bag-menu.svg"
                alt="Profile Icon"
              />
              <span className="menu-title" data-i18n="">
                Profile
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/report" className="menuiconweight">
              <img
                src="/app-assets/images/icons/phone-menu.svg"
                alt="Reports Icon"
              />
              <span className="menu-title" data-i18n="">
                Reports
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/user" className="menuiconweight">
              <img
                src="/app-assets/images/icons/extensions-menu.svg"
                alt="Extensions Icon"
              />
              <span className="menu-title" data-i18n="">
                Extensions
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/phonebook" className="menuiconweight">
              <img
                src="/app-assets/images/icons/phonebook.svg"
                alt="Phonebook Icon"
              />
              <span className="menu-title" data-i18n="">
                Phonebook
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="/dashboard/download" className="menuiconweight">
              <img
                src="/app-assets/images/icons/download.svg"
                alt="Download Icon"
              />
              <span className="menu-title" data-i18n="">
                Download
              </span>
            </a>
          </li>

          {/* Uncomment and replace with your route if needed */}
          {/* <li className="nav-item">
            <a href="/permission" className="menuiconweight">
              <img src="/app-assets/images/icons/permission.svg" alt="Permission Icon" />
              <span className="menu-title" data-i18n="">Permission</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
