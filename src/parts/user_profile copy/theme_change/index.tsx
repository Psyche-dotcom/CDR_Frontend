"use client";
import useStoreInApp from "@/zuststand/useStoreInApp";
import React from "react";

const ThemeChange = () => {
  const { theme, setTheme } = useStoreInApp();
  const handleThemeChange = () => setTheme(theme === true ? false : true);
  return (
    <div
      className="content-body tab-pane fade"
      id="nav-theme-settings"
      role="tabpanel"
      aria-labelledby="nav-theme-settings-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <div
            className={`card ${!theme === true ? "day-background" : ""}`}
            id="color-theme-card"
          >
            <div className="card-header">
              <h4 className="card-title">
                Color Theme
                {/* {_staticService.GetLocalization("CDR_ColorTheme").Data} */}
              </h4>
              <a className="heading-elements-toggle">
                <i className="la la-ellipsis-v font-medium-3"></i>
              </a>
              <div className="heading-elements">
                <ul className="list-inline mb-0">
                  <li>
                    <a data-action="collapse">
                      <i className="ft-minus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-content collapse show">
              <div className="card-body profile-content">
                <div className="row text-center ml-1 mt-5 mb-2">
                  <div className="button-con">
                    <label htmlFor="cb1">
                      <img
                        id="dayIcon"
                        src="/app-assets/images/icons/sun.svg"
                        alt="Day Icon"
                      />
                    </label>
                    <input
                      className="toggle2"
                      id="cb1"
                      type="checkbox"
                      onClick={handleThemeChange}
                      defaultChecked={theme === true}
                    />
                    <label className="toggle-button2" htmlFor="cb1"></label>
                    <label htmlFor="cb1">
                      <img
                        id="nightIcon"
                        src="/app-assets/images/icons/moon.svg"
                        alt="Night Icon"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeChange;
