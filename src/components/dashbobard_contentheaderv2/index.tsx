import Link from "next/link";
import React from "react";

interface DashboardContentHeaderProps {
  title: string;
  dashboardLabel: string;
  activeLabel: string;
}

const DashboardContentHeaderV2: React.FC<DashboardContentHeaderProps> = ({
  title,
  dashboardLabel,
  activeLabel,
}) => {
  return (
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2">
        <h3 className="content-header-title mb-0">{title}</h3>
        <div className="row breadcrumbs-top">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href={"/dashboard"}>{dashboardLabel}</Link>
              </li>
              <li className="breadcrumb-item active">{activeLabel}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContentHeaderV2;
