import React from "react";

type Props = {
  iconextraClass: string;
  buttonColor: string;
  title: string;
  cardId: string;
  cardPercentage: string;
  canvasId: string;
};

const CallStatsCard: React.FC<Props> = ({
  iconextraClass,
  buttonColor,
  title,
  cardId,
  cardPercentage,
  canvasId,
}) => {
  return (
    <div className="bigscreenwidth col-xl-4 col-12">
      <div className="card crypto-card-3 pull-up cardsbackground">
        <div className="card-content">
          <div className="card-head">
            <div className="btn-group"></div>
          </div>
          <div className="card-body pb-2">
            <div className="row">
              <div className="col-2">
                <h1>
                  <i
                    className={`${iconextraClass} cardtitlecolor font-large-3`}
                    style={{ color: buttonColor }}
                  ></i>
                </h1>
              </div>
              <div className="col-5 pl-2">
                <h3 className="titlesizeweight cardtitlecolor">{title}</h3>
              </div>
              <div className="col-5 text-right">
                <h1
                  className="titlesizeweight numbersize timer totalLongs"
                  id={cardId}
                >
                  0
                </h1>
                <div
                  className={cardPercentage}
                  style={{ height: "20px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row card-chart">
            <div className="col-12">
              <canvas
                id={canvasId}
                className="height-100"
                style={{ width: "530px", padding: "inherit" }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallStatsCard;
