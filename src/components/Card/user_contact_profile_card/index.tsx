import React from "react";

interface UserContactProfileCardProps {
  classcolor: string;
  iconclass: string;
  title: string;
  dataid: string;
}

const UserContactProfileCard: React.FC<UserContactProfileCardProps> = ({
  classcolor,
  iconclass,
  title,
  dataid,
}) => {
  return (
    <div className="col-md-3 last-call-statistic-container">
      <div className="card contactprofilebottomcards">
        <div
          className={`card-header card-head-inverse ${classcolor} contactprofilebottomcards-header`}
        >
          <h4 className="card-title text-white">
            <i className={iconclass}></i>&nbsp;&nbsp;
            {title}
          </h4>
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
          <div className="card-body" id={dataid}>
            <img
              src="/app-assets/images/loading.gif"
              alt="Loading"
              style={{
                display: "block",
                margin: "0 auto",
                width: "64px",
                height: "64px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserContactProfileCard;
