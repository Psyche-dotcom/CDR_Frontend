import Link from "next/link";
import React, { ReactNode } from "react";

interface DashboardCrumbProps {
  title: string;
  dashboardLabel: string;
  activeLabel: string;
  content: ReactNode;
}

const DashboardCrumb: React.FC<DashboardCrumbProps> = ({
  title,
  dashboardLabel,
  activeLabel,
  content,
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
      {content}
    </div>
  );
};

export default DashboardCrumb;
