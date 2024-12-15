import React from "react";

const ReportCustomizer = () => {
  return (
    <div className="customizer border-left-blue-grey border-left-lighten-4 d-none d-xl-block">
      <a className="customizer-close" href="#">
        <i className="ft-x font-medium-3"></i>
      </a>
      <a
        className="customizer-toggle box-shadow-3"
        style={{ backgroundColor: "#ffefc0" }}
        href="#"
      >
        <img
          className="align-baseline font-medium-3 spinner white"
          src="/app-assets/images/icons/star.svg"
          alt="toggle icon"
        />
      </a>{" "}
      <div className="customizer-content p-2 ps">
        <h4 className="text-uppercase mb-0">
          Favorite Filter List
          {/* {"CDR_FavoriteFilterList"} */}
        </h4>
        <hr />
        <div id="FavoriteReportList">
          <img
            src="/app-assets/images/loading.gif"
            style={{
              display: "block",
              margin: "0 auto",
              width: "64px",
              height: "64px",
            }}
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default ReportCustomizer;
