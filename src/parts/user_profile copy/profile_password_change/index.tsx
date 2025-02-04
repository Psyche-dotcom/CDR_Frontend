"use client";

import React, { useState } from "react";

const ProfilePasswordChange = () => {
  const [formData, setFormData] = useState({
    CurrentPassword: "",
    NewPassword: "",
    RepeatPassword: "",
  });

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
  return (
    <div
      className="content-body tab-pane fade"
      id="nav-password-change"
      role="tabpanel"
      aria-labelledby="nav-password-change-tab"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Profile Password</h4>
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
                id="PasswordChangeContentDiv"
              >
                <form id="form-user-change-password">
                  <div className="form-group">
                    <label htmlFor="CurPassword">Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="CurrentPassword"
                      id="CurPassword"
                      value={formData?.CurrentPassword || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="NPassword">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="NewPassword"
                      id="NPassword"
                      value={formData?.NewPassword || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="RePassword">Confirm New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="RepeatPassword"
                      id="RePassword"
                      value={formData?.RepeatPassword || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group text-right" onClick={handleSubmit}>
                    <button className="btn btn-primary" id="SavePassword">
                      Save & Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePasswordChange;
