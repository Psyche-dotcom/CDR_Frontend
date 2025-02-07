import { getProfilePicture } from "@/utils";
import React from "react";

interface MembershipHeaderProps {
  firstName: string | null;
  lastName: string | null;
  UserEdition: string | null;
  UserSimultaneousCalls: number | null;
  _packageName: string | null;
  _startDate: Date | string | null;
  _endDate: Date | string | null;
}

const MembershipHeader: React.FC<MembershipHeaderProps> = ({
  firstName,
  lastName,
  UserEdition,
  UserSimultaneousCalls,
  _packageName,
  _startDate,
  _endDate,
}) => {
  const userFirstLetter = firstName?.substring(0, 1).toLowerCase();
  const profilePicture = getProfilePicture(userFirstLetter);
  console.log("Pakche", _packageName);
  return (
    <div className="row user-membership">
      <div className="col-md-12">
        <div className="card profile-with-cover">
          <div className="card-img-top img-fluid height-150 user-profile-cover-image"></div>
          <div className="media profil-cover-details w-100">
            <div className="media-left pl-2 pt-2">
              <a href="#" className="profile-image">
                <img
                  src={profilePicture}
                  className="rounded-circle img-border height-100"
                  alt="Card image"
                />
              </a>
            </div>
            <div className="media-body pt-3 px-2">
              <div className="row">
                <div className="col">
                  <h3 className="card-title">
                    {firstName} {lastName}
                  </h3>
                </div>
                <div className="col text-right">
                  <div
                    className="btn-group d-none d-md-block float-right ml-2"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn extend-button"
                      id="BuyPackageButtonTop"
                    >
                      BUY PACKAGE
                      {/* {_staticService.GetLocalization("CDR_BuyPackage2").Data} */}
                    </button>
                    <button
                      type="button"
                      className="btn extend-button"
                      id="btnShowPromotionCodeModal"
                    >
                      {/* {
                        _staticService.GetLocalization("CDR_UsePromotionCode")
                          .Data
                      } */}
                      Apply Promotion Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-profile align-self-end">
            <button
              className="navbar-toggler d-sm-none"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <nav className="navbar navbar-expand-lg profile-card-top-height">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto profile-info">
                  <li className="nav-item">
                    <a className="nav-link">
                      {/* {_staticService.GetLocalization("CDR_Edition").Data}  */}
                      Edition :{" "}
                      <span className="package-span">{UserEdition}</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      {/* {
                        _staticService.GetLocalization("CDR_SimultaneousCalls")
                          .Data
                      } */}
                      Simultaneous Calls :{" "}
                      <span className="start-date-span">
                        {UserSimultaneousCalls}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Package
                      {/* {_staticService.GetLocalization("CDR_Package").Data} :{" "} */}
                      <span className="package-span">{_packageName}</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Package Start Date
                      {/* {
                        _staticService.GetLocalization("CDR_PackageStartDate")
                          .Data
                      } */}{" "}
                      :{" "}
                      <span className="start-date-span">
                        {new Date(_startDate || "").toLocaleDateString("en-GB")}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      Package End Date
                      {/* {
                        _staticService.GetLocalization("CDR_PackageEndDate")
                          .Data
                      } */}{" "}
                      :{" "}
                      <span className="end-date-span">
                        {new Date(_endDate || "").toLocaleDateString("en-GB")}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MembershipHeader;
