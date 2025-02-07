"use client";

import React, { useEffect, useState } from "react";

const DownloadSlider = () => {
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 8 ? 0 : prevIndex + 1)); // Loop back to 0 when index reaches 8
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 8 : prevIndex - 1)); // Loop back to 8 when index goes below 0
  };
  return (
    <section className="section-windows" style={{ display: "block" }}>
      <div className="card card-slider">
        <div className="card-body" id="DownloadSliderContent">
          <div
            className="owl-carousel owl-theme owl-loaded owl-drag"
            id="OwlDownload"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: `translate3d(${-1069 * index}px, 0px, 0px)`,
                  transition: "0.25s",
                  width: "9623px",
                }}
              >
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center">
                          Installing CDR CLOUD Service
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h3>Supported Windows operating systems</h3>
                        <ul>
                          <li>Windows Server 2016</li>
                          <li>Windows Server 2019</li>
                          <li>Windows 10 Pro</li>
                          <li>Windows 10 Enterprise</li>
                          <li>Windows 11</li>
                        </ul>
                        <p>
                          <b>NOTE:</b> For Windows operating systems, .Net
                          framework 5.0 or higher must be installed.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h3>Requirements:</h3>
                        <ul>
                          <li>
                            According to the operating system on which 3CX
                            Switchboard system version 18 is installed, download
                            the relevant installation package from
                            <a
                              href="https://cdrcloud.com/Home/Download"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://cdrcloud.com/Home/Download
                            </a>
                            .
                          </li>
                          <li>
                            Make sure there is 100 Mb of free space for the
                            installation of the CDR service.
                          </li>
                          <li>
                            The following ports must be NATed to the 3cx server
                            from the Firewall/Modem device in the location where
                            the 3CX Switchboard system is installed:
                            <ul>
                              <li>TCP 8899 (CDR Service Port)</li>
                              <li>TCP 5480 (Windows PostgreSql Port)</li>
                            </ul>
                          </li>
                        </ul>
                        <p>
                          <b>NOTE:</b> The necessary permission rules for the
                          above ports must be added to the firewall application
                          in the Windows operating system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>Setup:</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/win1.png"
                          alt="Setup"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>Installation on Windows operating system:</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/win2.png"
                          alt="Installation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Run the “K2M Call Detail Reports.exe” file you
                            downloaded from www.cdrcloud.com.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/win3.png"
                          alt="Run File"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Start the installation by clicking the
                            &quot;Download&quot; button.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/win4.png"
                          alt="Download"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Complete the installation by clicking the “Finish”
                            button.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/profilesetting1.png"
                          alt="Finish Installation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Open the &quot;Services&quot; window and check that
                            the &quot;CDRApiService&quot; service is running.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/profilesetting2.png"
                          alt="Services Window"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Associate your CDRCloud account with the CDR
                            service:
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/windows/profilesetting3.png"
                          alt="Associate Account"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="text-center">
                          Associate your CDRCloud account with the CDR service:
                        </h1>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            Create a CDRCloud account at
                            <a
                              href="https://cdrcloud.com/Panel/User/Register"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://cdrcloud.com/Panel/User/Register
                            </a>
                            .
                          </li>
                          <li>
                            Sign in to your account at
                            <a
                              href="https://cdrcloud.com/Panel/User/Login"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://cdrcloud.com/Panel/User/Login
                            </a>
                            .
                          </li>
                          <li>
                            Click on the account icon in the upper right corner
                            of the page and switch to the &quot;Profile&quot;
                            page.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/profilesetting1.png"
                          alt="Profile Settings"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="owl-nav">
              <button
                type="button"
                role="presentation"
                className="owl-prev"
                onClick={handlePrevious}
              >
                <span aria-label="Previous">‹</span>
              </button>
              <button
                type="button"
                role="presentation"
                className="owl-next"
                onClick={handleNext}
              >
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots">
              {Array.from({ length: 9 }, (_, i) => (
                <button
                  key={i}
                  role="button"
                  className={`owl-dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSlider;
