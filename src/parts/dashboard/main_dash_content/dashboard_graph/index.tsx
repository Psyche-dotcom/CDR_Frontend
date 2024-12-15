import React from "react";

const DashboardCard: React.FC = () => {
  return (
    <div className="col-md-4">
      <div className="card dashboard-right-graph">
        <div className="card-header">
          <h4 className="card-title">Total Calls</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <span className="dropdown DashboardGraph">
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
                  top: 0,
                  left: 0,
                  willChange: "transform",
                }}
              >
                <a className="dropdown-item" data-item={2}>
                  <i className="la la-calendar"></i> Weekly
                </a>
                <a className="dropdown-item active" data-item={2}>
                  <i className="la la-calendar"></i> Monthly
                </a>
                <a className="dropdown-item" data-item={3}>
                  <i className="la la-calendar"></i> Yearly
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="card-body">
            <div id="basic-area" className="height-400 echart-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
