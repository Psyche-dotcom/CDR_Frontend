import React from "react";

interface SupportCardInfoProps {
  cat: string;
  date: string;
  subject: string;
  subinfo: string;
}

const SupportCardInfo: React.FC<SupportCardInfoProps> = ({
  cat,
  date,
  subject,
  subinfo,
}) => {
  return (
    <li
      className="card support-list-item"
      data-item="d36c8062-d03c-48d9-8b42-70923d9bfdc5"
    >
      <div className="row">
        <div className="col-md-2">
          <img
            className="list-profile-photo"
            src="/app-assets/images/admin.png"
            alt="Profile"
          />
        </div>
        <div className="col-md-10">
          <p className="categories">{cat}</p>
          <p className="date">
            <i className="ft-calendar"></i> {date}
          </p>
          <div className="clearfix"></div>
          <p className="list-subject">{subject}</p>
          <div className="text">
            <p>{subinfo}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SupportCardInfo;
