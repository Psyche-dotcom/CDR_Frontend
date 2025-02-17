import React from "react";
import DashBoardStats from "./stats";
import DashboardCard from "./dashboard_graph";
import TopCallSection from "./top_call_section";
import DashBoardStats2 from "./stats";

const MainDashContent2 = () => {
  return (
    <div className="content-body">
      <div className="row">
        <DashBoardStats2 />
        <DashboardCard />
      </div>
      <div className="row">
        <TopCallSection />
      </div>
    </div>
  );
};

export default MainDashContent2;
