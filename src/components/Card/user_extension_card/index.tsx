import React from "react";

interface UserExtensionCardProps {
  icon: string;
  title: string;
  dataclass: string;
  dataid: string;
  data: string | number;
  progressclass: string;
  progressid: string;
}

const UserExtensionCard: React.FC<UserExtensionCardProps> = ({
  icon,
  title,
  dataclass,
  dataid,
  data,
  progressclass,
  progressid,
}) => {
  return (
    <div className="col-xl-3 col-lg-6 col-12">
      <div className="card pull-up contactprofiletopcards">
        <div className="card-content">
          <div className="card-body">
            <div className="media d-flex">
              <div className="media-body text-left">
                <i className={`la ${icon} font-large-2`}></i>
                <h6 className="mt-1">{title}</h6>
              </div>
              <div>
                <h3 className={dataclass} id={dataid}>
                  {data}
                </h3>
              </div>
            </div>
            <div className="progress progress-sm mt-1 mb-0 box-shadow-2">
              <div
                className={`progress-bar  ${progressclass}`}
                role="progressbar"
                id={progressid}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExtensionCard;
