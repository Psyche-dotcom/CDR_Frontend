import React from "react";
import DashBoardStats from "./stats";
import DashboardCard from "./dashboard_graph";
import TopCallSection from "./top_call_section";
import DashboardCard2 from "./dashboard_graph/NewCard.tsx";

const MainDashContent = () => {
  return (
    <div className="content-body">
      <div className="row">
        <DashBoardStats />
        <DashboardCard2 />
      </div>
      <div className="row">
        <TopCallSection />
      </div>
    </div>
  );
};

export default MainDashContent;
