import React from "react";

const ProfileInformation = () => {
  return (
    <div
      className="content-body tab-pane fade"
      id="nav-user-info"
      role="tabpanel"
      aria-labelledby="nav-user-info-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">
                Profile Information
                {/* {_staticService.GetLocalization("CDR_ProfileInformation").Data} */}
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
              <div
                className="card-body profile-content"
                id="UserProfileInformationContent"
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
      </div>
    </div>
  );
};

export default ProfileInformation;
