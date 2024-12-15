"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="custom-container">
      <div className="row">
        <div className="col-md-3 footer-top">
          <img src="/images/footer-logo.png" alt="Footer Logo" />
          <p>
            A channel-friendly hosted application to allow any PBX reseller to
            offer a simple, fast, and intuitive reporting and monitoring tool to
            customers of any size and from any business vertical.
          </p>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul className="footer-menu">
              <li>
                <Link href="/download">Download</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4">
          <div className="footer-links">
            <h3>Quick Entry</h3>
            <ul className="footer-menu">
              <li>
                <Link href="/panel/user/login">Sign in</Link>
              </li>
              <li>
                <Link href="/panel/user/register">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-4">
          <div className="footer-links">
            <h3>Privacy And Use</h3>
            <ul className="footer-menu">
              <li>
                <Link href="/privacy-agreement">Privacy Agreement</Link>
              </li>
              <li>
                <Link href="/distance-selling-contract">
                  Distance Selling Contract
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2 col-sm-4 footer-top">
          <h3>Contact</h3>
          <a href="mailto:info@cdrcloud.com">info@cdrcloud.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="col-md-6 left">
            ©2020 - K2M Software | All Rights Reserved
          </div>
          <div className="col-md-6 right">
            <a href="#">
              <img src="/images/social-media/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/social-media/facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/social-media/twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/images/social-media/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
