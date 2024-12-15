import Link from "next/link";
import React from "react";

interface LocalizationService {
  [key: string]: string;
}

const getLocalization = (key: string): string => {
  const localization: LocalizationService = {
    CDR_CompanyProfile: "Company Profile",
    CDR_Dashboard: "Dashboard",
  };
  return localization[key] || key;
};

const ContentHeader: React.FC = () => {
  return (
    <div className="content-header row">
      <div className="content-header-left col-md-6 col-12 mb-2">
        <h3 className="content-header-title mb-0">
          {getLocalization("CDR_CompanyProfile")}
        </h3>
        <div className="row breadcrumbs-top">
          <div className="breadcrumb-wrapper col-12">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/dashboard">
                  {getLocalization("CDR_Dashboard")}
                </Link>
              </li>
              <li className="breadcrumb-item active">
                {getLocalization("CDR_CompanyProfile")}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
