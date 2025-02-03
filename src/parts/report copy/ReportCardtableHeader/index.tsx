import React from "react";

interface CardHeaderProps {
  title: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title }) => {
  return (
    <div className="card-header">
      <h4 className="card-title">{title}</h4>
      <a className="heading-elements-toggle">
        <i className="la la-ellipsis-v font-medium-3" />
      </a>
      <div className="heading-elements">
        <ul className="list-inline mb-0">
          <li>
            <a className="exportExcel">
              <img
                src="/app-assets/images/excel-icon.svg"
                alt="Excel Icon"
                style={{ width: "30px" }}
              />
            </a>
          </li>
          <li>
            <a data-action="expand">
              <i className="ft-maximize" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardHeader;
