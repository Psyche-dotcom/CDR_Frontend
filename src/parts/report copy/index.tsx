import React from "react";
import ReportCustomizer from "./reportCustomizer";
import ReportContentHeader from "./report_content_header";
import ReportDateFilter from "./report_date_Filter";
import ReportFilterFav from "./report_filterfav";
import Script from "next/script";
import ReportTable from "./report_table";
import "../../css/report.css";
const ReportMainSection2 = () => {
  return (
    <>
      <Script
        src="/app-assets/audio/wavesurfer.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/audio/wavesurfer.cursor.min.js"
        strategy="afterInteractive"
      />

      <ReportCustomizer />
      <ReportContentHeader />
      <div className="content-body company-calls-filter">
        <ReportDateFilter />
        {/* <FilterPanel /> */}
        <ReportFilterFav />
        <ReportTable />
      </div>
    </>
  );
};

export default ReportMainSection2;
