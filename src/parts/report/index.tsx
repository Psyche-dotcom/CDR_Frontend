import React from "react";
import ReportCustomizer from "./reportCustomizer";
import ReportContentHeader from "./report_content_header";
import ReportDateFilter from "./report_date_Filter";
import FilterPanel from "./filter_panel";
import ReportFilterFav from "./report_filterfav";
import Script from "next/script";
import ReportTable from "./report_table";
import "../../css/report.css";
const ReportMainSection = () => {
  return (
    <>
      <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      />
      <link
        href="/app-assets/responsive-datatable/datatables.min.css"
        rel="stylesheet"
      />
      <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/responsive-datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.datatables.net/scroller/1.4.3/js/dataTables.scroller.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/audio/wavesurfer.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/audio/wavesurfer.cursor.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/calls.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/report.js"
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

export default ReportMainSection;
