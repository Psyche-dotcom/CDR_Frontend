"use client";
import React, { useState } from "react";

interface DataInfo {
  userdata: string;
  time: string;
  barwidth: number;
  valuenow: number;
}

interface CallStatsCardProps {
  title: string;
  cardId: string;
  allId: string;
  monthlyId: string;
  data: DataInfo[];
  showTime: Boolean;
  onTimeFrameChange: (timeframe: 1 | 2 | 3 | 4) => void;
  onReload: () => void;
}

const CallStatsCardDetailsinfo: React.FC<CallStatsCardProps> = ({
  title,
  cardId,
  showTime,
  allId,
  monthlyId,

  data,
  onTimeFrameChange,
  onReload,
}) => {
  const [activeTimeFrame, setActiveTimeFrame] = useState<1 | 2 | 3 | 4>(3);

  const handleTimeFrameChange = (timeframe: 1 | 2 | 3 | 4) => {
    setActiveTimeFrame(timeframe);
    onTimeFrameChange(timeframe);
  };

  return (
    <div className="col-12 col-md-3 talk-card">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title titlesizeweight">{title}</h4>
          <a className="heading-elements-toggle">
            <i className="la la-ellipsis-v font-medium-3"></i>
          </a>
          <div className="heading-elements">
            <ul className="list-inline mb-0">
              <li>
                <a id={cardId} data-action="reload" onClick={onReload}>
                  <i className="ft-rotate-cw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content top-card-design collapse show tab-content">
          <div
            className={`card-body pt-0 titlesizeweight tab-pane fade show active`}
            id={monthlyId}
          >
            {data.length === 0 && (
              <p className="pt-1">
                No data available for the selected time range.
              </p>
            )}
            {data.map((info, index) => (
              <React.Fragment key={index}>
                <p className="pt-1">
                  {info.userdata}(
                  <span
                    className={`float-right text-bold-600 ${
                      showTime && "dashboard-topmosttalk-time"
                    }`}
                  >
                    {showTime && <i className="ft-clock"></i>}
                    {info.time}
                  </span>
                  )
                </p>
                <div className="progress progress-sm mt-1 mb-0 box-shadow-1">
                  <div
                    className={`progress-bar ${
                      info.barwidth < 40
                        ? "bg-gradient-x-danger"
                        : info.barwidth < 50
                        ? "bg-gradient-x-warning"
                        : info.barwidth < 60
                        ? "bg-gradient-x-primary"
                        : info.barwidth < 70
                        ? "bg-gradient-x-info"
                        : "bg-gradient-x-success"
                    }`}
                    role="progressbar"
                    style={{ width: `${info.barwidth}%` }}
                    aria-valuenow={info.barwidth}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div
            className="card-body pt-0 titlesizeweight tab-pane fade"
            id={allId}
          ></div>
          <div
            className="btn-group tumkayit-btn nav nav-tabs"
            id="nav-tab"
            role="tablist"
          >
            <button
              className={`btn btn-zaman1 ${
                activeTimeFrame === 1 ? "active" : ""
              }`}
              onClick={() => handleTimeFrameChange(1)}
            >
              Daily
            </button>
            <button
              className={`btn btn-zaman1 ${
                activeTimeFrame === 2 ? "active" : ""
              }`}
              onClick={() => handleTimeFrameChange(2)}
            >
              Weekly
            </button>
            <button
              className={`btn btn-zaman1 ${
                activeTimeFrame === 3 ? "active" : ""
              }`}
              onClick={() => handleTimeFrameChange(3)}
            >
              Monthly
            </button>
            <button
              className={`btn btn-zaman1 ${
                activeTimeFrame === 4 ? "active" : ""
              }`}
              onClick={() => handleTimeFrameChange(4)}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallStatsCardDetailsinfo;
