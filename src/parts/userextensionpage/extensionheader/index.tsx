import React from "react";

interface UserExtensionHeaderProps {
  localizations: {
    [key: string]: string;
  };
}

const UserExtensionHeader: React.FC<UserExtensionHeaderProps> = ({
  localizations,
}) => {
  return (
    <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block">
      <a className="customizer-close" style={{ cursor: "pointer" }}>
        <i className="ft-x font-medium-3"></i>
      </a>
      <a
        className="customizer-toggle box-shadow-3"
        style={{ backgroundColor: "#ffc6e0 !important" }}
      >
        <i
          className="ft-settings font-medium-3 spinner white"
          style={{ color: "#e83e8c !important" }}
        ></i>
      </a>
      <div className="customizer-content p-2 ps">
        <h4 className="text-uppercase mb-0">
          {localizations["CDR_CardSettings"]}
        </h4>
        <hr />
        <p>{localizations["CDR_SelectTimes"]}</p>
        <div className="form-group">
          <div
            className="btn-group customizer-sidebar-options"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-outline-info DetailTimesFilter"
              data-item="1"
              data-sidebar="menu-light"
            >
              {localizations["CDR_Daily"]}
            </button>
            <button
              type="button"
              className="btn btn-outline-info DetailTimesFilter"
              data-item="4"
              data-sidebar="menu-dark"
            >
              {localizations["CDR_Weekly"]}
            </button>
            <button
              type="button"
              className="btn btn-outline-info DetailTimesFilter active"
              data-item="2"
              data-sidebar="menu-dark"
            >
              {localizations["CDR_Monthly"]}
            </button>
            <button
              type="button"
              className="btn btn-outline-info DetailTimesFilter"
              data-item="4"
              data-sidebar="menu-dark"
            >
              {localizations["CDR_Yearly"]}
            </button>
          </div>
          <div className="noel">
            <img src="/app-assets/images/noel.png" alt="Noel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExtensionHeader;
