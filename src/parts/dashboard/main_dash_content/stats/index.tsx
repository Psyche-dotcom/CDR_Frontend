import CallStatsCard from "@/components/Card/call_stats_card";
import React from "react";

const DashBoardStats = () => {
  return (
    <div className="col-md-8 index-graphic-bar">
      <div id="crypto-stats-3" className="row">
        <CallStatsCard
          iconextraClass="la la-line-chart"
          buttonColor="#ff6bdd"
          title="Total Calls"
          cardId="DashboardTotalCalls"
          cardPercentage="DashboardTotalCalls-Percent"
          canvasId="chart-total-calls"
        />

        <CallStatsCard
          iconextraClass="ft-phone-incoming buttonAnimation"
          buttonColor="#ffb051"
          title="Total Inbound"
          cardId="DashboardTotalInbound"
          cardPercentage="DashboardTotalInbound-Percent"
          canvasId="chart-total-inbound"
        />
        <CallStatsCard
          iconextraClass="ft-phone-outgoing"
          buttonColor="#8e6dd4"
          title="Total Outbound"
          cardId="DashboardTotalOutbound"
          cardPercentage="DashboardTotalOutbound-Percent"
          canvasId="chart-total-outbound"
        />
        <CallStatsCard
          iconextraClass="ft-phone-missed"
          buttonColor="#4ccbfc"
          title="Total Answered"
          cardId="DashboardTotalMissed"
          cardPercentage="DashboardTotalMissed-Percent"
          canvasId="chart-total-missed"
        />
        <CallStatsCard
          iconextraClass="ft-phone-off"
          buttonColor="#fe4d51"
          title="Total Unanswered"
          cardId="DashboardTotalAbondaned"
          cardPercentage="DashboardTotalAbondaned-Percent"
          canvasId="chart-total-abondaned"
        />
        <CallStatsCard
          iconextraClass="ft-users"
          buttonColor="#65e0e0"
          title="Total Internal"
          cardId="DashboardTotalExt2Ext"
          cardPercentage="DashboardTotalExt2Ext-Percent"
          canvasId="chart-total-ext2ext"
        />
      </div>
    </div>
  );
};

export default DashBoardStats;
