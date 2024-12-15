import React from "react";
import DashBoardStats from "./stats";
import DashboardCard from "./dashboard_graph";
import TopCallSection from "./top_call_section";

const MainDashContent = () => {
  return (
    <div className="content-body">
      <div className="row">
        <DashBoardStats />
        <DashboardCard />
      </div>
      <div className="row">
        <TopCallSection />
      </div>
    </div>
  );
};

export default MainDashContent;
