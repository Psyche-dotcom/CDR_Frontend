import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_CallSummary: "Call Summary",
    CDR_DisplayOptions: "Display Options",
    CDR_Hourly: "Hourly",
    CDR_Daily: "Daily",
  };
  return localization[key] || key;
};

const CallSummaryCard: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card" id="CallSummaryCard">
          <div className="card-header">
            <h4 className="card-title">{getLocalization("CDR_CallSummary")}</h4>
            <a className="heading-elements-toggle">
              <i className="la la-ellipsis-v font-medium-3"></i>
            </a>
            <div className="heading-elements">
              <ul className="list-inline mb-0">
                <li>
                  <a data-action="collapse">
                    <i className="ft-minus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-content collapse show">
            <div className="card-body">
              <div className="row justify-content-end mb-4">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>{getLocalization("CDR_DisplayOptions")}</label>
                    <select className="form-control" id="CallSummaryFilter">
                      <option value="0">{getLocalization("CDR_Hourly")}</option>
                      <option value="1" selected>
                        {getLocalization("CDR_Daily")}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                id="stacked-column"
                className="height-400 echart-container"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallSummaryCard;
