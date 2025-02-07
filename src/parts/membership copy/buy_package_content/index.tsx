"use client";

import React, { useState } from "react";

const BuyPackage = () => {
  const [index, setIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(1);
  const [formData, setFormData] = useState({
    country: "",
    address: "",
    zip: "",
  });
  const packageList = [
    {
      id: 1,
      title: "32 SC PRO or ENT",
      price: 12.0,
    },
    {
      id: 2,
      title: "32 SC PRO or ENT",
      price: 12.0,
      description: "Price per month, billed annually",
    },
  ];
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="row" style={{ padding: "0px 30px" }}>
      <div className="col-md-12" id="BuyPackageContent">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Buy Package</h4>
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
              <form
                action="#"
                className="number-tab-steps wizard-circle wizard clearfix"
                role="application"
                id="steps-uid-0"
              >
                <div style={{ margin: "0px auto", width: "100%" }}>
                  <div
                    style={{ maxWidth: "950px", margin: "0px auto" }}
                    className="steps clearfix"
                  >
                    <ul
                      role="tablist"
                      style={{
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "0px 12px",
                        marginBottom: "4px",
                      }}
                    >
                      <li
                        role="tab"
                        className="first current"
                        aria-disabled="false"
                        aria-selected="true"
                      >
                        <a
                          id="steps-uid-0-t-0"
                          href="#steps-uid-0-h-0"
                          aria-controls="steps-uid-0-p-0"
                          style={{
                            display: "flex",
                            color: "#999999",
                            flexDirection: "column",
                            fontSize: "16px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",

                              border:
                                activeTabIndex === 1 || activeTabIndex > 1
                                  ? "5px solid #666EE8"
                                  : "5px solid #F4F5FA",
                              color:
                                activeTabIndex > 1
                                  ? "#fff"
                                  : activeTabIndex === 1
                                  ? "#666EE8"
                                  : "#999999",
                              background:
                                activeTabIndex > 1 ? "#666EE8" : "#fff",
                            }}
                            className="step"
                          >
                            1
                          </span>
                        </a>
                      </li>
                      <div
                        style={{
                          height: "5px",
                          background:
                            activeTabIndex > 1 ? "#666EE8" : "#F4F5FA",
                          flex: "1",
                        }}
                      ></div>
                      <li
                        role="tab"
                        className="done"
                        aria-disabled="false"
                        aria-selected="false"
                      >
                        <a
                          id="steps-uid-0-t-1"
                          href="#steps-uid-0-h-1"
                          aria-controls="steps-uid-0-p-1"
                          style={{
                            alignItems: "center",
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "16px",
                            color: "#999999",
                          }}
                        >
                          <span
                            className="step"
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border:
                                activeTabIndex === 2 || activeTabIndex > 2
                                  ? "5px solid #666EE8"
                                  : "5px solid #F4F5FA",
                              color:
                                activeTabIndex > 2
                                  ? "#fff"
                                  : activeTabIndex === 2
                                  ? "#666EE8"
                                  : "#999999",

                              background:
                                activeTabIndex > 2 ? "#666EE8" : "#fff",
                            }}
                          >
                            2
                          </span>
                        </a>
                      </li>
                      <div
                        style={{
                          height: "5px",
                          background:
                            activeTabIndex > 2 ? "#666EE8" : "#F4F5FA",
                          flex: "1",
                        }}
                      ></div>
                      <li
                        role="tab"
                        className="disabled last"
                        aria-disabled="true"
                      >
                        <a
                          id="steps-uid-0-t-2"
                          href="#steps-uid-0-h-2"
                          aria-controls="steps-uid-0-p-2"
                          style={{
                            display: "flex",
                            fontSize: "16px",
                            color: "#999999",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            style={{
                              height: "50px",
                              width: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              border:
                                activeTabIndex === 3
                                  ? "5px solid #666EE8"
                                  : "5px solid #F4F5FA",
                              color:
                                activeTabIndex === 3 ? "#666EE8" : "#999999",
                            }}
                          >
                            3
                          </span>
                        </a>
                      </li>
                    </ul>
                    <ul
                      role="tablist"
                      style={{
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          color: activeTabIndex === 1 ? "#333333" : "",
                        }}
                      >
                        Packages
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: activeTabIndex === 2 ? "#333333" : "",
                        }}
                      >
                        Invoice Information
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          color: activeTabIndex === 3 ? "#333333" : "",
                        }}
                      >
                        Credit Card
                      </p>
                    </ul>
                  </div>
                </div>
                <div className="content clearfix">
                  {activeTabIndex === 1 && (
                    <fieldset
                      id="steps-uid-0-p-0"
                      role="tabpanel"
                      aria-labelledby="steps-uid-0-h-0"
                      className="body current"
                      aria-hidden="false"
                    >
                      <div className="row mt-2 justify-content-center">
                        {packageList.map((pckg) => (
                          <div
                            className="col-xl-4 col-md-6 col-12"
                            key={pckg.id}
                            onClick={() => setIndex(pckg.id)}
                          >
                            <div
                              className={`card profile-card-with-cover package-list-item ${
                                index === pckg.id ? "selected" : ""
                              }`}
                            >
                              <input
                                type="hidden"
                                className="SelectedPackageInput"
                                value={pckg.id}
                              />
                              <div className="card-content card-deck text-center">
                                <div className="card box-shadow">
                                  <div className="card-body">
                                    <h2 className="my-0 font-weight-bold">
                                      {pckg.title}
                                    </h2>
                                    <h1 className="pricing-card-title">
                                      {pckg.price} €{" "}
                                      <small className="text-muted">/ mo</small>
                                    </h1>
                                    <ul
                                      className="list-unstyled mt-2 mb-2"
                                      style={{ minHeight: "50px" }}
                                    >
                                      <li>{pckg?.description || ""}</li>
                                    </ul>
                                  </div>
                                  <div className="card-footer">
                                    <button
                                      type="button"
                                      className="btn btn-lg btn-block package-button btn-outline-warning selectedPackage"
                                    >
                                      Select Package
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  )}
                  {activeTabIndex === 2 && (
                    <fieldset
                      id="steps-uid-0-p-1"
                      role="tabpanel"
                      aria-labelledby="steps-uid-0-h-1"
                      className="body"
                      aria-hidden="true"
                    >
                      <div className="step-invoice-content">
                        <div
                          className="alert bg-info alert-icon-left alert-dismissible mt-1"
                          role="alert"
                        >
                          <span className="alert-icon">
                            <i className="la la-info"></i>
                          </span>
                          After update any information, Please click{" "}
                          <strong>Save Changes</strong> button
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <select
                            className="form-control bselect select2-hidden-accessible Setted"
                            data-live-search="true"
                            id="invoice-country"
                            style={{ width: "100%" }}
                            name="country"
                            onChange={handleChange}
                          >
                            <option value="0" selected disabled>
                              Please select a country
                            </option>
                            <option value="1">Afghanistan</option>
                            <option value="2">Albania</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea
                            className="form-control"
                            id="invoice-address"
                            maxLength={2000}
                            style={{ resize: "none" }}
                            onChange={handleChange}
                            name="address"
                            value={formData?.address || ""}
                          >
                            Denizli Mh. Yalı Cd. No:2/B Urla/İzmir
                          </textarea>
                        </div>
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={10}
                            value={formData?.zip || ""}
                            id="invoice-zip-code"
                            name="zip"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </fieldset>
                  )}

                  {activeTabIndex === 3 && (
                    <fieldset
                      id="steps-uid-0-p-2"
                      role="tabpanel"
                      aria-labelledby="steps-uid-0-h-2"
                      className="body"
                      aria-hidden="true"
                    >
                      <div id="credit-card-container"></div>
                    </fieldset>
                  )}
                </div>
                <div className="actions clearfix">
                  <ul
                    role="menu"
                    aria-label="Pagination"
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      gap: "14px",
                      listStyle: "none",
                    }}
                  >
                    <li
                      className="disabled"
                      aria-disabled="true"
                      onClick={() => {
                        if (activeTabIndex > 1) {
                          setActiveTabIndex(activeTabIndex - 1);
                        }
                      }}
                      style={{
                        border: "1px solid #ddd",
                        padding: "7px 12px",
                        color: "#999999",
                      }}
                    >
                      <a
                        href="#previous"
                        role="menuitem"
                        style={{ color: "#999999" }}
                      >
                        Previous
                      </a>
                    </li>
                    {activeTabIndex < 3 && (
                      <li
                        style={{
                          padding: "7px 12px",
                          color: "#fff",
                          background: "#666EE8",
                          borderRadius: "2px",
                          border: "1px solid transparent",
                        }}
                        aria-hidden="false"
                        aria-disabled="false"
                        onClick={() => {
                          if (activeTabIndex < 3 && index !== 0) {
                            setActiveTabIndex(activeTabIndex + 1);
                          }
                        }}
                      >
                        <a
                          href="#next"
                          role="menuitem"
                          style={{ color: "#fff" }}
                        >
                          Next
                        </a>
                      </li>
                    )}
                    <li aria-hidden="true" style={{ display: "none" }}>
                      <a href="#finish" role="menuitem">
                        Finish
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPackage;
