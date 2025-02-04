"use client";

import React, { useState } from "react";

const ProfileInformation = () => {
  const [formData, setFormData] = useState({
    FirstName: "Hiddenbay",
    LastName: "Urla Emre",
    Email: "emredikici8@gmail.com",
    PhoneNumber: "+905307913268",
    CompanyName: "Hiddenbay Urla",
    CountryId: "223",
    CityId: "41",
    Address: "Denizli Mh. Yalı Cd. No:2/B Urla/İzmir",
    ZipCode: "35000",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
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
              <h4 className="card-title">Profile Information</h4>
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
                <form
                  onSubmit={handleSubmit}
                  id="form-user-profile-information"
                >
                  <div className="form-group">
                    <label>Name*</label>
                    <input
                      type="text"
                      name="FirstName"
                      id="FirstName"
                      className="form-control"
                      value={formData.FirstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Lastname*</label>
                    <input
                      type="text"
                      name="LastName"
                      id="LastName"
                      className="form-control"
                      value={formData.LastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      className="form-control"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone*</label>
                    <input
                      type="text"
                      name="PhoneNumber"
                      id="PhoneNumber"
                      className="form-control"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Company Name*</label>
                    <input
                      type="text"
                      name="CompanyName"
                      id="CompanyName"
                      className="form-control"
                      value={formData.CompanyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Country</label>
                    <select
                      className="form-control bselect"
                      data-live-search="true"
                      name="CountryId"
                      id="CountryId"
                      style={{ width: "100%" }}
                      value={formData.CountryId}
                      onChange={handleChange}
                    >
                      <option value="0" disabled>
                        Please select a country
                      </option>
                      <option value="223">Turkey</option>
                      <option value="225">Usa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>City</label>
                    <select
                      className="form-control bselect"
                      data-live-search="true"
                      name="CityId"
                      id="CityId"
                      style={{ width: "100%" }}
                      value={formData.CityId}
                      onChange={handleChange}
                    >
                      <option value="41">İzmir</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      name="Address"
                      id="Address"
                      maxLength={2000}
                      style={{ resize: "none" }}
                      value={formData.Address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="ZipCode"
                      id="ZipCode"
                      className="form-control"
                      maxLength={10}
                      value={formData.ZipCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group text-right">
                    <button className="btn btn-primary" type="submit">
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

export default ProfileInformation;
