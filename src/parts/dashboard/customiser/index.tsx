"use client";
import React, { useState } from "react";

interface CustomizerProps {
  cardSettings: string;
  cardFilterMessage: string;
  daily: string;
  weekly: string;
  monthly: string;
  yearly: string;
}

const Customizer: React.FC<CustomizerProps> = ({
  cardSettings,
  cardFilterMessage,
  daily,
  weekly,
  monthly,
  yearly,
}) => {
  const [activeFilter, setActiveFilter] = useState("MONTHLY");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block">
      <a className="customizer-close" href="#">
        <i className="ft-x font-medium-3"></i>
      </a>
      <a
        className="customizer-toggle box-shadow-3"
        style={{ backgroundColor: "#ffc6e0" }}
      >
        <i
          className="ft-settings font-medium-3 spinner white"
          style={{ color: "#e83e8c" }}
        ></i>
      </a>
      <div className="customizer-content p-2">
        <h4 className="text-uppercase mb-0">{cardSettings}</h4>
        <hr />
        <p>{cardFilterMessage}</p>
        <div className="form-group">
          <div
            className="btn-group customizer-sidebar-options"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              data-item="1"
              data-sidebar="menu-light"
              className={`btn btn-outline-info DashboardFilter ${
                activeFilter === "DAILY" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("DAILY")}
            >
              {daily}
            </button>
            <button
              type="button"
              data-sidebar="menu-dark"
              data-item="4"
              className={`btn btn-outline-info DashboardFilter ${
                activeFilter === "WEEKLY" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("WEEKLY")}
            >
              {weekly}
            </button>
            <button
              type="button"
              data-item="2"
              data-sidebar="menu-dark"
              className={`btn btn-outline-info DashboardFilter ${
                activeFilter === "MONTHLY" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("MONTHLY")}
            >
              {monthly}
            </button>
            <button
              type="button"
              data-sidebar="menu-dark"
              data-item="3"
              className={`btn btn-outline-info DashboardFilter ${
                activeFilter === "YEARLY" ? "active" : ""
              }`}
              onClick={() => handleFilterClick("YEARLY")}
            >
              {yearly}
            </button>
          </div>
        </div>

        <div className="ps__rail-x" style={{ left: "0px; bottom: 0px;" }}>
          <div
            className="ps__thumb-x"
            //@ts-ignore
            tabindex="0"
            style={{ left: " 0px; width: 0px;" }}
          ></div>
        </div>
        <div className="ps__rail-y" style={{ top: "0px; right: 0px;" }}>
          <div
            className="ps__thumb-y"
            //@ts-ignore
            tabindex="0"
            style={{ top: "0px; height: 0px;" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
