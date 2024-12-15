import DashboardCrumb from "@/components/dashboardcrumb";
import React from "react";
import SupportContent from "./support_content";
import Script from "next/script";

const SupportMainSection = () => {
  return (
    <>
      <Script
        src="/app-assets/vendors/js/forms/select/select2.full.min.js"
        strategy="afterInteractive"
      />
      <link
        href="/app-assets/vendors/css/forms/selects/select2.min.css"
        rel="stylesheet"
      />
      <Script
        src="/app-assets/page-scripts/support.js"
        strategy="afterInteractive"
      />
      <DashboardCrumb
        title={"Support"}
        dashboardLabel={"Dashboard"}
        activeLabel={"Support"}
        content={
          <>
            <div className="content-header-left text-right col-md-6 col-12 mb-2">
              <button
                className="btn btn-primary create-support-btn"
                id="create-support-button"
              >
                <i className="ft-edit-3"></i> Create Ticket
              </button>
            </div>
          </>
        }
      />
      <SupportContent />
    </>
  );
};

export default SupportMainSection;
