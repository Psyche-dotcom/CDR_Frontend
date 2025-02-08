"use client";

import DashboardCrumb from "@/components/dashboardcrumb";
import React, { useState } from "react";
import SupportContent from "./support_content";
import Script from "next/script";

const SupportMainSection2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
                onClick={() => setIsOpen(true)}
              >
                <i className="ft-edit-3"></i> Create Ticket
              </button>
            </div>
          </>
        }
      />
      <SupportContent isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default SupportMainSection2;
