import React from "react";

const ConnectionCard1 = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            Profile Connection Details
            {/* {
              _staticService.GetLocalization("CDR_ProfileConnectionDetails")
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

          <div
            className="alert bg-info alert-icon-left alert-dismissible mt-1"
            role="alert"
          >
            <span className="alert-icon">
              <i className="la la-info"></i>
            </span>
            Just enter the <strong>FQDN</strong> of your 3cx Server. Do not fill
            out Database name and password . It is needed for manual
            configuration
            {/* {_staticService.GetLocalization("CDR_SadeceIpMesaji").Data} */}
          </div>
        </div>

        <div className="card-content collapse show">
          <div
            className="card-body profile-content"
            id="UserConnectionDetailContent"
          >
            <img
              src="/app-assets/images/loading.gif"
              alt="Loading"
              style={{
                display: "block",
                margin: "0 auto",
                width: "64px",
                height: "64px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard1;
