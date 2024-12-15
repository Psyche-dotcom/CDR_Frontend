import React, { ReactNode } from "react";

interface PhoneCardCardProps {
  title: string;
  children: ReactNode;
}

const PhoneBookCard: React.FC<PhoneCardCardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <a className="heading-elements-toggle">
          <i className="la la-ellipsis-v font-medium-3"></i>
        </a>
        <div className="heading-elements"></div>
      </div>
      <div className={`card-content`}>{children}</div>
    </div>
  );
};

export default PhoneBookCard;
