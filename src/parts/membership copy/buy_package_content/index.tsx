import React from "react";

const BuyPackage = () => {
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
                <div className="steps clearfix">
                  <ul role="tablist">
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
                      >
                        <span className="current-info audible">
                          current step:{" "}
                        </span>
                        <span className="step">1</span> Packages
                      </a>
                    </li>
                    <li role="tab" className="disabled" aria-disabled="true">
                      <a
                        id="steps-uid-0-t-1"
                        href="#steps-uid-0-h-1"
                        aria-controls="steps-uid-0-p-1"
                      >
                        <span className="step">2</span> Invoice Information
                      </a>
                    </li>
                    <li
                      role="tab"
                      className="disabled last"
                      aria-disabled="true"
                    >
                      <a
                        id="steps-uid-0-t-2"
                        href="#steps-uid-0-h-2"
                        aria-controls="steps-uid-0-p-2"
                      >
                        <span className="step">3</span> Credit Card
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="content clearfix">
                  <h6
                    id="steps-uid-0-h-0"
                    tabIndex={-1}
                    className="title current"
                  >
                    Packages
                  </h6>
                  <fieldset
                    id="steps-uid-0-p-0"
                    role="tabpanel"
                    aria-labelledby="steps-uid-0-h-0"
                    className="body current"
                    aria-hidden="false"
                  >
                    <div className="row mt-2 justify-content-center">
                      <div className="col-xl-4 col-md-6 col-12">
                        <div className="card profile-card-with-cover package-list-item">
                          <input
                            type="hidden"
                            className="SelectedPackageInput"
                            value="aff644c6-de88-49e5-97bb-453ffc621823"
                          />
                          <div className="card-content card-deck text-center">
                            <div className="card box-shadow">
                              <div className="card-body">
                                <h2 className="my-0 font-weight-bold">
                                  32 SC PRO or ENT
                                </h2>
                                <h1 className="pricing-card-title">
                                  16.00 €{" "}
                                  <small className="text-muted">/ mo</small>
                                </h1>
                                <ul
                                  className="list-unstyled mt-2 mb-2"
                                  style={{ minHeight: "50px" }}
                                ></ul>
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
                      <div className="col-xl-4 col-md-6 col-12">
                        <div className="card profile-card-with-cover package-list-item">
                          <input
                            type="hidden"
                            className="SelectedPackageInput"
                            value="128bdb48-5e0e-4144-bff6-f97e71de7bd7"
                          />
                          <div className="card-content card-deck text-center">
                            <div className="card box-shadow">
                              <div className="card-body">
                                <h2 className="my-0 font-weight-bold">
                                  32 SC PRO or ENT
                                </h2>
                                <h1 className="pricing-card-title">
                                  12.00 €{" "}
                                  <small className="text-muted">/ mo</small>
                                </h1>
                                <ul
                                  className="list-unstyled mt-2 mb-2"
                                  style={{ minHeight: "50px" }}
                                >
                                  <li>Price per month, billed annually</li>
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
                    </div>
                  </fieldset>
                  <h6 id="steps-uid-0-h-1" tabIndex={-1} className="title">
                    Invoice Information
                  </h6>
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
                          value="35000"
                          id="invoice-zip-code"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <h6 id="steps-uid-0-h-2" tabIndex={-1} className="title">
                    Credit Card
                  </h6>
                  <fieldset
                    id="steps-uid-0-p-2"
                    role="tabpanel"
                    aria-labelledby="steps-uid-0-h-2"
                    className="body"
                    aria-hidden="true"
                  >
                    <div id="credit-card-container"></div>
                  </fieldset>
                </div>
                <div className="actions clearfix">
                  <ul role="menu" aria-label="Pagination">
                    <li className="disabled" aria-disabled="true">
                      <a href="#previous" role="menuitem">
                        Previous
                      </a>
                    </li>
                    <li aria-hidden="false" aria-disabled="false">
                      <a href="#next" role="menuitem">
                        Next
                      </a>
                    </li>
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
