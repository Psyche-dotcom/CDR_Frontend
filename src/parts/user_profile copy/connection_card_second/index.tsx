import React from "react";

const ConnectionCard2 = () => {
  return (
    <div className="col-md-6">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">
              Database Connection Status
              {/* {
                _staticService.GetLocalization("CDR_DatabaseConnectionStatus")
                  .Data
              } */}
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
              <div className="row text-center ml-1" id="ConnectContext">
                <h3 className="profile-connect-text text-bold-600">
                  Not Connected
                  {/* {_staticService.GetLocalization("CDR_NotConnected").Data} */}
                </h3>
                <div className="toggle-btn float-left">
                  <input type="checkbox" className="cb-value" disabled />
                  <span className="round-btn"></span>
                </div>
                <h3 className="profile-connect-text">
                  Connected
                  {/* {_staticService.GetLocalization("CDR_Connected").Data} */}
                </h3>
              </div>

              <div className="form-group text-right">
                <button className="btn btn-danger" id="ConnectControl">
                  Connection Control
                  {/* {_staticService.GetLocalization("CDR_ConnectionControl").Data} */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">
              Socket Connection Status
              {/* {
                _staticService.GetLocalization("CDR_SocketConnectionStatus")
                  .Data
              } */}
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
              <div className="row text-center ml-1" id="SocketConnectContext">
                {/* <img
                  src="/app-assets/images/loading.gif"
                  alt="Loading"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    width: "64px",
                    height: "64px",
                  }}
                /> */}
                <h3 className="profile-connect-text text-bold-600">
                  Not Connected
                </h3>
                <div className="toggle-btn float-left">
                  <input type="checkbox" className="cb-value" disabled />
                  <span className="round-btn"></span>
                </div>
                <h3 className="profile-connect-text">Connected</h3>
              </div>
              <div className="form-group text-right">
                <button className="btn btn-danger" id="SocketConnectControl">
                  Connection Control
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard2;
