"use client";

import React, { useState } from "react";

const ConnectionCard1 = () => {
  const [formData, setFormData] = useState({
    Port: "5432",
    DbName: "database_single",
    DbUsername: "phonesystem",
    DbPassword: "",
    IpAddress: "saklikoy.3cx.com.tr",
  });

  const [version, setVersion] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleVersionChange = (event: any) => {
    setVersion(event.target.value);
  };
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
            <form id="form-user-connection-detail">
              <div className="form-group">
                <label>FQDN (Fully Qualified Domain Name)</label>
                <input
                  type="text"
                  name="IpAddress"
                  id="IpAddressCon"
                  className="form-control"
                  value={formData?.IpAddress || "saklikoy.3cx.com.tr"}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Port</label>
                <select
                  className="form-control bselect"
                  name="Port"
                  id="PortCon"
                  value={formData?.Port || "5432"}
                  onChange={handleSelectChange}
                >
                  <option value="5480">WINDOWS (5480)</option>
                  <option value="5432">LINUX (5432)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Database Name</label>
                <input
                  type="text"
                  name="DbName"
                  id="DbNameCon"
                  className="form-control"
                  value={formData?.DbName || "database_single"}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Database Username</label>
                <input
                  type="text"
                  name="DbUsername"
                  id="ConDbUsername"
                  className="form-control"
                  value={formData?.DbUsername || "phonesystem"}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Database Password{" "}
                  <span className="badge badge-success">Password Saved</span>
                </label>
                <input
                  type="password"
                  name="DbPassword"
                  id="ConDbPassword"
                  className="form-control"
                  value={formData?.DbPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>3CX Version</label>
                <fieldset className="radio">
                  <label>
                    <input
                      type="radio"
                      name="Version"
                      className="option-input radio"
                      value="1"
                      checked={version === "1"} // Set the 'checked' prop based on the state
                      onChange={handleVersionChange} // Handle the change
                    />{" "}
                    V16
                  </label>
                </fieldset>
                <fieldset className="radio">
                  <label>
                    <input
                      type="radio"
                      name="Version"
                      className="option-input radio"
                      value="2"
                      checked={version === "2"} // Set the 'checked' prop based on the state
                      onChange={handleVersionChange} // Handle the change
                    />{" "}
                    V18
                  </label>
                </fieldset>
              </div>
              <div className="form-group text-right">
                <button
                  className="btn btn-primary"
                  id="Save"
                  onClick={handleSubmit}
                >
                  Save & Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard1;
