import Link from "next/link";
import React from "react";

const Sidenav: React.FC = () => {
  return (
    <div className="sidenav-wrapper">
      <div className="center-block">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          {/*
          <li className="nav-item">
            <Link href="/features" passHref>
              <a className="nav-link">Features</a>
            </Link>
          </li>
          */}
          <li className="nav-item">
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/download" className="nav-link">
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link href="user/login" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link href="user/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
