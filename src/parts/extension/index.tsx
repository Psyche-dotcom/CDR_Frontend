import DashboardContentHeader from "@/components/dashboardcontentheader";
import React from "react";
import UserIP from "./userIp";
import ExtensionCard from "@/components/Card/extension_card";
import Script from "next/script";

const ExtensionMainSection = () => {
  return (
    <>
      <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/app-assets/responsive-datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/charts/chart.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/card-loading.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/Scripts/signalr.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/company-person.js"
        strategy="afterInteractive"
      />
      <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      />
      <link
        href="/app-assets/responsive-datatable/datatables.min.css"
        rel="stylesheet"
      />
      <DashboardContentHeader
        title="Company Extensions"
        dashboardLabel="Dashboard"
        activeLabel="Company Extensions"
        helpInfoText="If you want to see details of the Extension on chart , just click the bar or eye button in the list"
      />
      <div className="content-body">
        <UserIP />
        <div className="row">
          <div className="col-12">
            <ExtensionCard
              title="Most Contacted"
              contentClassName="collapse show"
            >
              <div className="card-body chartjs">
                <canvas
                  id="combo-bar-line"
                  height="400"
                  style={{ cursor: "pointer" }}
                ></canvas>
              </div>
            </ExtensionCard>
          </div>
          <div className="col-12">
            <ExtensionCard
              title="All Extensions"
              headingElements={
                <a className="exportExcel">
                  <img
                    src="/app-assets/images/excel-icon.svg"
                    alt="Export to Excel"
                    style={{ width: "40px" }}
                  />
                </a>
              }
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table
                      className="table table-de mb-0 table-hover display nowrap"
                      id="CompanyPersonTable"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Total Inbound Calls</th>
                          <th>Total Outbound Calls</th>
                          <th>Unanswered Missed Calls</th>
                          <th className="all"></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </ExtensionCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtensionMainSection;
