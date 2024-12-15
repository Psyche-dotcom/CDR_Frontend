import React from "react";

interface FooterProps {
  distanceSellingContract: string;
  privacyAgreement: string;
  copyright: string;
  rightsReserved: string;
  dockerServer: string;
}

const FooterDash: React.FC<FooterProps> = ({
  distanceSellingContract,
  privacyAgreement,
  copyright,
  rightsReserved,
  dockerServer,
}) => {
  return (
    <footer className="footer footer-static footer-light navbar-border navbar-shadow">
      <div className="row ml-0 mr-0">
        <div className="col-md-4 footer-link">
          <a
            className="text-bold-800 grey darken-2"
            href="/page/distance-selling-contract"
          >
            {distanceSellingContract}
          </a>
          <a
            className="text-bold-800 grey darken-2"
            href="/page/privacy-agreement"
          >
            {privacyAgreement}
          </a>
        </div>
        <div className="col-md-4">
          <p className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
            <span className="d-block d-md-inline-block">
              {copyright} &copy; {new Date().getFullYear()}{" "}
              <a
                className="text-bold-800 grey darken-2"
                href="https://cdrcloud.com/"
                target="_blank"
              >
                K2M Software
              </a>
              , {rightsReserved} / {dockerServer}
            </span>
          </p>
        </div>
        <div className="col-md-4 text-right">
          <img
            src="/app-assets/images/footer-iyzico-en.png"
            style={{ width: "285px" }}
            alt="iyzico"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterDash;
