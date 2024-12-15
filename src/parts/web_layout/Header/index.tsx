"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header>
      <div className="custom-container">
        <nav className="navbar navbar-expand-lg justify-content-between">
          <a href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="Logo" />
          </a>
          <div className="d-flex justify-content-end">
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/download" className="nav-link">
                    Download
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/pricing" className="nav-link">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link">
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/register" className="nav-link sign-button">
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              id="navbarToggler"
            >
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
