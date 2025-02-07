import React from "react";

interface MembershipContentProps {
  _startDate: Date | string | null;
  _endDate: Date | string | null;
  _minus: number | any;
}

const MembershipContent: React.FC<MembershipContentProps> = ({
  _startDate,
  _endDate,
  _minus,
}) => {
  return (
    <div className="row" style={{ padding: "0px 30px" }}>
      <div className="col-md-4">
        <div className="card">
          <div className="card-content collapse show">
            <div className="card-body profile-content">
              <div className="membership-chart-top">
                <p>
                  <img
                    src="/app-assets/images/icons/timeline-calender-green.svg"
                    alt="Start Date"
                  />{" "}
                  {new Date(_startDate || "").toLocaleDateString("en-GB")}
                </p>
              </div>

              <div className="membership-chart-div">
                <div id="chartdiv-all" style={{ height: "350px" }}></div>
                <p>
                  {_minus < 0 ? 0 : _minus} <br />
                  DAY
                  {/* {_staticService.GetLocalization("CDR_Day").Data.toUpperCase()} */}
                </p>
              </div>

              <div className="graphy-details">
                <button
                  type="button"
                  className="btn extend-button button-85"
                  id="BuyPackageButton"
                >
                  <i className="la la-shopping-cart"></i> Buy Package
                  {/* {_staticService.GetLocalization("CDR_BuyPackage2").Data} */}
                </button>
              </div>

              <div className="membership-chart-bottom">
                <p>
                  <img
                    src="/app-assets/images/icons/timeline-calender-red.svg"
                    alt="End Date"
                  />{" "}
                  {new Date(_endDate || "").toLocaleDateString("en-GB")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card" style={{ minHeight: "414px" }}>
          <div className="card-header" style={{ borderRadius: "30px" }}>
            <h4 className="card-title">
              Transactions
              {/* {_staticService.GetLocalization("CDR_Transactions").Data} */}
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
            <div className="card-body profile-content">
              <table className="table" id="TransactionTable">
                <thead>
                  <tr>
                    <th>
                      Date
                      {/* {_staticService.GetLocalization("CDR_Date").Data} */}
                    </th>
                    <th>
                      Package
                      {/* {_staticService.GetLocalization("CDR_Package").Data} */}
                    </th>
                    <th>
                      Transaction
                      {/* {_staticService.GetLocalization("CDR_Transaction").Data} */}
                    </th>
                    <th>
                      Price
                      {/* {_staticService.GetLocalization("CDR_Price").Data} */}
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipContent;
