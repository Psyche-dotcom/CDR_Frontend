import Link from "next/link";
import React from "react";

interface DashboardContentHeaderProps {
  title: string;
  dashboardLabel: string;
  activeLabel: string;
  helpInfoText: string;
}

const DashboardContentHeader: React.FC<DashboardContentHeaderProps> = ({
  title,

  dashboardLabel,
  activeLabel,
  helpInfoText,
}) => {
  return (
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2">
        <h3 className="content-header-title mb-0">{title}</h3>
        <div className="row breadcrumbs-top">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={"/dashboard"}>{dashboardLabel}</a>
              </li>
              <li className="breadcrumb-item active">{activeLabel}</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="content-header-right col-md-6 col-12 pl-5 calls-info">
        <div
          className="alert bg-info alert-icon-left alert-dismissible mb-1 ml-5"
          role="alert"
        >
          <span className="alert-icon">
            <i className="la la-info"></i>
          </span>
          {helpInfoText}
        </div>
      </div>
    </div>
  );
};

export default DashboardContentHeader;
