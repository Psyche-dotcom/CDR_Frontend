import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_MonthlyTotalCalls: "Monthly Total Calls",
  };
  return localization[key] || key;
};

const MonthlyTotalCallsCard: React.FC = () => {
  return (
    <div className="col-md-6">
      <div className="card" id="MonthlyTotalCalls">
        <div className="card-header">
          <h4 className="card-title">
            {getLocalization("CDR_MonthlyTotalCalls")}
          </h4>
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
            <div
              id="basic-column"
              className="height-400 echart-container"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTotalCallsCard;
