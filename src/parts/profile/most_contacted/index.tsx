import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_MostContacted: "Most Contacted",
    CDR_Daily: "Daily",
    CDR_Weekly: "Weekly",
    CDR_Monthly: "Monthly",
    CDR_Yearly: "Yearly",
  };
  return localization[key] || key;
};

const MostContactedCard: React.FC = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{getLocalization("CDR_MostContacted")}</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <div className="heading-elements">
              <span
                className="dropdown DashboardGraph MostContactedFilter"
                style={{ top: "-15px" }}
              >
                <button
                  id="btnSearchDrop1"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="btn btn-info btn-sm dropdown-toggle dropdown-menu-right"
                >
                  <i className="ft-calendar white"></i>
                </button>
                <span
                  aria-labelledby="btnSearchDrop1"
                  className="dropdown-menu mt-1 dropdown-menu-right"
                  style={{
                    position: "absolute",
                    transform: "translate3d(-101px, 25px, 0px)",
                    top: "0px",
                    left: "0px",
                    willChange: "transform",
                  }}
                >
                  <a className="dropdown-item" data-item="0">
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Daily")}
                  </a>
                  <a className="dropdown-item" data-item="1">
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Weekly")}
                  </a>
                  <a className="dropdown-item active" data-item="2">
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Monthly")}
                  </a>
                  <a className="dropdown-item" data-item="3">
                    <i className="la la-calendar"></i>{" "}
                    {getLocalization("CDR_Yearly")}
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body">
            <div id="basic-pie" className="height-400 echart-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostContactedCard;
