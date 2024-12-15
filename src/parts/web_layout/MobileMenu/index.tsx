"use client";
import Link from "next/link";

const MobileMenu: React.FC = () => {
  return (
    <div className="sidenav-wrapper">
      <div className="center-block">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/download" className="nav-link">
              Download
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/panel/user/login" className="nav-link">
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/panel/user/register" className="nav-link">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
