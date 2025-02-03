import DashboardContentHeader from "@/components/dashboardcontentheader";
import React from "react";
import UserIP from "./userIp";
import ExtensionCard from "@/components/Card/extension_card";
import MostContactedChart from "./MostContactedChart";
import UsersExTable from "./UsersExTable";

const ExtensionMainSection2 = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/2.2.1/css/dataTables.dataTables.css"
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
              <MostContactedChart />
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
              <UsersExTable />
            </ExtensionCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtensionMainSection2;
