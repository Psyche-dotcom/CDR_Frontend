import React from "react";
import ProfileCrumb from "./profile_crumb";
import ContentHeader from "./header";
import MonthlyTotalCallsCard from "./monthly_total_calls";
import MostContactedCard from "./most_contacted";
import CallSummaryCard from "./call_summary";
import GeneralStatisticCard from "./general_statistics";
import TotalInboundStatisticCard from "./total_inbound_statistics/indx";
import TotalOutboundStatisticCard from "./total_outbound_statistics";
import TotalExtExtStatisticCard from "./total_exe_statistics";
import Script from "next/script";
import MostContactedCard2 from "./most_contacted_card2";

const ProfileMain = () => {
  return (
    <>
      <Script
        src="/app-assets/vendors/js/charts/echarts/echarts.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/card-loading.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/company-detail.js"
        strategy="afterInteractive"
      />

      <ProfileCrumb />
      <ContentHeader />
      <div className="content-body">
        <div className="row">
          <MonthlyTotalCallsCard />
          <MostContactedCard />
        </div>
        <CallSummaryCard />
        <div className="row">
          <GeneralStatisticCard />
          <TotalInboundStatisticCard />
          <TotalOutboundStatisticCard />
          <TotalExtExtStatisticCard />
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
