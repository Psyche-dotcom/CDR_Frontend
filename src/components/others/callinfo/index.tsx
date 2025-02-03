import React, { useState } from "react";

interface CallInfoDetailsProps {
  status: boolean;
  setStatus: (status: boolean) => void;
}

const CallInfoDetails: React.FC<CallInfoDetailsProps> = ({
  status,
  setStatus,
}) => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const handleTabChange = (tabNumber: number) => {
    setCurrentTab(tabNumber);
  };

  const handleClose = () => {
    setStatus(false);
  };

  return (
    <div
      id="callDetail"
      className="sidebar appointment-detail"
      style={{ display: status ? "block" : "none" }}
    >
      <div className="sidebar-content">
        <style>
          {`.plyr { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 480px; }`}
        </style>
        <div className="header">
          <input
            type="hidden"
            id="RecordingFileName"
            value="05321338050-turkce--8003--"
          />
          <a className="close-button close-appointment" onClick={handleClose}>
            <img src="/app-assets/images/modal-close.svg" alt="Close" />
          </a>
          <div className="header-tag"></div>
          <div className="row header-back">
            <div className="col-md-6 text-center">
              <div className="from-avatar detail-avatar">
                <img
                  src="/app-assets/images/icons/call-detail-user.svg"
                  alt="From Avatar"
                />
              </div>
              <h3>05321338050</h3>
            </div>
            <div className="col-md-6 text-center">
              <div className="to-avatar detail-avatar">
                <img
                  src="/app-assets/images/icons/call-detail-user.svg"
                  alt="To Avatar"
                />
              </div>
              <h3>Turkce ( 8003 )</h3>
            </div>
          </div>
        </div>
        <div className="content call-details-scroll">
          <div className="tabs-page mb-5">
            <ul className="nav nav-tabs" role="tablist">
              <li
                role="presentation"
                onClick={() => handleTabChange(1)}
                className={`${currentTab === 1 && "active"}`}
              >
                <a
                  href="#call-information"
                  aria-controls="call-information"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded={currentTab === 1 ? "true" : "false"}
                  className={`${currentTab === 1 && "active show"}`}
                  aria-selected={currentTab === 1 ? "true" : "false"}
                >
                  <h4>Call Information</h4>
                </a>
              </li>
              <li
                role="presentation"
                onClick={() => handleTabChange(2)}
                className={`${currentTab === 2 && "active"}`}
              >
                <a
                  href="#call-details"
                  aria-controls="call-details"
                  role="tab"
                  data-toggle="tab"
                  className={`${currentTab === 2 && "active show"}`}
                  aria-expanded={currentTab === 2 ? "true" : "false"}
                  aria-selected={currentTab === 2 ? "true" : "false"}
                >
                  <h4>Details</h4>
                </a>
              </li>
              <li
                role="presentation"
                onClick={() => handleTabChange(3)}
                className={`${currentTab === 3 && "active"}`}
              >
                <a
                  href="#sound-recording"
                  aria-controls="sound-recording"
                  role="tab"
                  data-toggle="tab"
                  className={`${currentTab === 3 && "active show"}`}
                  aria-expanded={currentTab === 3 ? "true" : "false"}
                  aria-selected={currentTab === 3 ? "true" : "false"}
                >
                  <h4>Recording</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="tabs-page">
            <div className="tab-content">
              <div
                role="tabpanel"
                className={`tab-pane ${currentTab === 1 && "active show"}`}
                id="call-information"
              >
                <div className="call-detail-message-list-top">
                  <p>
                    <img
                      src="/app-assets/images/icons/timeline-calender-green.svg"
                      alt="Calendar"
                    />{" "}
                    28.01.2025 10:35:36
                  </p>
                  <div className="clearfix"></div>
                  <img
                    src="/app-assets/images/timeline-circle.svg"
                    alt="Timeline"
                  />
                </div>
                <div className="call-detail-message-list">
                  <div className="call-detail-message-content left">
                    <div className="call-detail-message-item">
                      <div className="item-text">
                        IVR (8000) replaced by Turkce(8003)
                      </div>
                    </div>
                    <div className="call-detail-clock-item">
                      <div className="start-time">
                        <img
                          src="/app-assets/images/icons/timeline-clock-green.svg"
                          alt="Clock"
                        />{" "}
                        10:35:36
                      </div>
                      <div className="clearfix"></div>
                      <div className="talk-time">
                        <img
                          src="/app-assets/images/icons/timeline-speaking.svg"
                          alt="Speaking"
                        />{" "}
                        00:00:17 10:35:53
                      </div>
                      <div className="clearfix"></div>
                      <div className="end-time">
                        <img
                          src="/app-assets/images/icons/timeline-clock-red.svg"
                          alt="Clock"
                        />{" "}
                        10:35:53
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="call-detail-message-content center">
                    <div className="call-detail-message-item">
                      <div className="item-text">
                        <img
                          src="/app-assets/images/icons/timeline-bell.svg"
                          alt="Bell"
                        />{" "}
                        Ringing : 00:00:00
                      </div>
                    </div>
                  </div>
                  <div className="call-detail-message-content right">
                    <div className="call-detail-message-item">
                      <div className="item-text">
                        Terminated by Turkce(Ext.8003)
                      </div>
                    </div>
                    <div className="call-detail-clock-item">
                      <div className="start-time">
                        <img
                          src="/app-assets/images/icons/timeline-clock-green.svg"
                          alt="Clock"
                        />{" "}
                        10:35:53
                      </div>
                      <div className="clearfix"></div>
                      <div className="talk-time">
                        <img
                          src="/app-assets/images/icons/timeline-speaking.svg"
                          alt="Speaking"
                        />{" "}
                        00:00:00 10:35:53
                      </div>
                      <div className="clearfix"></div>
                      <div className="end-time">
                        <img
                          src="/app-assets/images/icons/timeline-clock-red.svg"
                          alt="Clock"
                        />{" "}
                        10:35:53
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="call-detail-message-list-bottom">
                  <img
                    src="/app-assets/images/timeline-circle.svg"
                    alt="Timeline"
                  />
                  <p>
                    <img
                      src="/app-assets/images/icons/timeline-calender-red.svg"
                      alt="Calendar"
                    />{" "}
                    28.01.2025 10:35:53
                  </p>
                </div>
              </div>
              <div
                role="tabpanel"
                className={`tab-pane report-table ${
                  currentTab === 2 && "active show"
                }`}
                id="call-details"
              >
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Call Id:</p>
                  </div>
                  <div className="col-md-6" style={{ fontSize: "16px" }}>
                    11212
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">From:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-from">
                      <img
                        src="/app-assets/images/icons/user-from.svg"
                        alt="User"
                      />{" "}
                      05321338050
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">To:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-to">
                      <img
                        src="/app-assets/images/icons/user-to.svg"
                        alt="User"
                      />{" "}
                      Turkce ( 8003 )
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Duration:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-duration">
                      <i className="la la-clock"></i> 00:00:17
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Talk Time:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-talktime">
                      <i className="la la-clock"></i> 00:00:00
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Ring time:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-ringtime">
                      <i className="la la-clock"></i> 00:00:00
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Date:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-date">
                      <img
                        src="/app-assets/images/icons/filter-calendar.svg"
                        alt="Calendar"
                      />{" "}
                      28.01.2025
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Start Time:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-starttime">
                      <i className="la la-clock"></i> 10:35:36
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">End Time:</p>
                  </div>
                  <div className="col-md-6">
                    <div className="table-column-stoptime">
                      <i className="la la-clock"></i> 10:35:53
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Type:</p>
                  </div>
                  <div className="col-md-6">
                    <span className="badge badge-success">inbound</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="title">Status:</p>
                  </div>
                  <div className="col-md-6">
                    <span className="badge badge-completed">
                      <i
                        className="la la-check"
                        style={{ fontSize: "unset" }}
                      ></i>{" "}
                      answered
                    </span>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className={`tab-pane ${currentTab === 3 && "active show"}`}
                id="sound-recording"
              >
                <div className="detail-loading">
                  <div className="detail-loading-content">
                    <p>Recording Not Found</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallInfoDetails;
