"use client";

import { useState } from "react";

export default function LinuxSlider() {
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1));
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
                      <div className="col-md-6">
                        <h3>Supported Debian operating systems</h3>
                        <ul>
                          <li>Debian 10 Buster</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h3>Requirements:</h3>
                        <ul>
                          <li>
                            According to the operating system on which the 3CX
                            Switchboard system version 18 is installed, download
                            the relevant installation package from the “
                            <a
                              href="https://cdrcloud.com/Home/Download"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              https://cdrcloud.com/Home/Download
                            </a>
                            ”
                          </li>
                          <li>
                            Make sure there is 100 Mb of free space for the
                            installation of the CDR service.
                          </li>
                          <li>
                            The following ports must be NATed to the 3cx server
                            from the Firewall/Modem device in the location where
                            the 3CX Switchboard system is installed.
                            <ul>
                              <li>TCP 8899 (CDR Service Port)</li>
                              <li>TCP 5432 (Debian PostgreSql Port)</li>
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
                <div className="owl-item active" style={{ width: "1069.12px" }}>
                  <div className="item">
                    <div className="row">
                      <div className="col-md-6">
                        <h1>Setup:</h1>
                        <h3>Installation on Debian OS:</h3>
                        <ul>
                          <li>
                            Go to the directory where you will download the
                            installation file, run the “wget{" "}
                            <a
                              href="https://cdrcloud.com/setup/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              cdrcloud.com/setup/
                            </a>
                            cdr-service-v18.deb” command and download the
                            installation package with the .deb extension.
                          </li>
                          <li>
                            After the installation is complete, run the "ls"
                            command and make sure you can see the "cdr-service-
                            v18.deb" file in the directory.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/app-assets/images/download-page/linux/lin1.png"
                          alt="Linux setup"
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
                            Complete the service installation by running the
                            command “dpkg –i cdr-service-v18.deb ”.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/linux/lin2.png" />
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
                            Once the installation is complete you should take
                            the screenshot below.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/linux/lin3.png" />
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
                            Check that the CDR service is running by entering
                            the "systemctl status cdr-service" command.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/linux/lin4.png" />
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
                            Create a cdrcloud account at{" "}
                            <a
                              href="https://cdrcloud.com/Panel/User/Register"
                              target="_blank"
                            >
                              https://cdrcloud.com/Panel/User/Register
                            </a>{" "}
                            .
                          </li>
                          <li>
                            Sign in to your account at{" "}
                            <a
                              href="https://cdrcloud.com/Panel/User/Login"
                              target="_blank"
                            >
                              https://cdrcloud.com/Panel/User/Login
                            </a>
                            .
                          </li>
                          <li>
                            Click on the account icon in the upper right corner
                            of the page and switch to the "Profile" page.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/profilesetting1.png" />
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
                            In the "Connection Status" tab that appears, in the
                            "FQDN" field, type the WAN IP address or FQDN
                            address where we can reach your 3CX PBX system.
                          </li>
                          <li>
                            In the "Port" field, select the "WINDOWS(5480),
                            LINUX(5432)" port according to your operating
                            system.
                          </li>
                          <li>
                            Save your settings by selecting the "V18" option in
                            the "3CX Version" field and pressing the "Save &amp;
                            Close" button.
                          </li>
                        </ul>
                        <p>
                          <b>NOTE:</b> Leave the Database Name, Database
                          Username, Database Password fields blank. The
                          “cdr-service” service will automatically fill in this
                          information.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/profilesetting2.png" />
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
                            Switch to the “Connection Status” tab and verify
                            that the “Database Connection Status” and “Socket
                            Connection Status” states are “Connected”.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img src="/app-assets/images/download-page/profilesetting3.png" />
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
              {Array.from({ length: 8 }, (_, i) => (
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
}
