import React from "react";

interface CallStatsCardProps {
  title: string;
  cardId: string;
  dailyId: string;
  weeklyId: string;
  allId: string;
  monthlyId: string;
  targetBt1: string;
  Statusbt1: string;
  Typebt1: string;
  targetBt2: string;
  Statusbt2: string;
  Typebt2: string;
  targetBt3: string;
  Statusbt3: string;
  Typebt3: string;
  targetBt4: string;
  Statusbt4: string;
  Typebt4: string;
}

const CallStatsCard2: React.FC<CallStatsCardProps> = ({
  title,
  cardId,
  dailyId,
  weeklyId,
  allId,
  monthlyId,
  targetBt1,
  Statusbt1,
  Typebt1,
  targetBt2,
  Statusbt2,
  Typebt2,
  targetBt3,
  Statusbt3,
  Typebt3,
  targetBt4,
  Statusbt4,
  Typebt4,
}) => {
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
                <a id={cardId} data-action="reload">
                  <i className="ft-rotate-cw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-content top-card-design collapse show tab-content">
          <div
            className="card-body pt-0 titlesizeweight tab-pane fade"
            id={dailyId}
          ></div>
          <div
            className="card-body pt-0 titlesizeweight tab-pane fade"
            id={weeklyId}
          ></div>
          <div
            className="card-body pt-0 titlesizeweight tab-pane fade show active"
            id={monthlyId}
          ></div>
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
              data-type={Typebt1}
              data-statue={Statusbt1}
              className="btn btn-zaman1"
              type="button"
              data-target={targetBt1}
            >
              Daily
            </button>
            <button
              data-type={Typebt2}
              data-statue={Statusbt2}
              className="btn btn-zaman1"
              type="button"
              data-target={targetBt2}
            >
              Weekly
            </button>
            <button
              data-type={Typebt3}
              data-statue={Statusbt3}
              className="btn btn-zaman1 active"
              type="button"
              data-target={targetBt3}
            >
              Monthly
            </button>
            <button
              data-type={Typebt4}
              data-statue={Statusbt4}
              className="btn btn-zaman1"
              type="button"
              data-target={targetBt4}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallStatsCard2;
