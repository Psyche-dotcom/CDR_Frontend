"use client";
import React, { useState, useEffect } from "react";

interface CustomizerProps {
  cardSettings: string;
  cardFilterMessage: string;
  daily: string;
  weekly: string;
  monthly: string;
  yearly: string;
  activeFilter: string; // Prop from parent to set the current active filter
  setActiveFilter: (filter: string) => void; // Prop to update the parent state
}

const Customizer: React.FC<CustomizerProps> = ({
  cardSettings,
  cardFilterMessage,
  daily,
  weekly,
  monthly,
  yearly,
  activeFilter,
  setActiveFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Set the current month filter when the component loads (if needed)
  useEffect(() => {
    setActiveFilter("MONTHLY"); // Default to MONTHLY on mount if not already set
  }, [setActiveFilter]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div
      className={`customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block ${
        isOpen && "open"
      }`}
    >
      <a
        className="customizer-close"
        href="#"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="ft-x font-medium-3"></i>
      </a>
      <a
        className="customizer-toggle box-shadow-3"
        style={{ backgroundColor: "#ffc6e0" }}
        onClick={() => {
          setIsOpen(true);
        }}
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
            tabIndex={0}
            style={{ left: " 0px; width: 0px;" }}
          ></div>
        </div>
        <div className="ps__rail-y" style={{ top: "0px; right: 0px;" }}>
          <div
            className="ps__thumb-y"
            //@ts-ignore
            tabIndex={0}
            style={{ top: "0px; height: 0px;" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Customizer;
