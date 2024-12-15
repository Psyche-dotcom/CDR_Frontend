import React from "react";
import Customizer from "./customiser";
import MainDashContent from "./main_dash_content";
import Script from "next/script";

const DashboardMain = () => {
  return (
    <>
      <Script
        src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/jquery.countTo.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/charts/chart.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/charts/echarts/echarts.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/css/plugins/animate/animate.css"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/card-loading.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/dashboard.js"
        strategy="afterInteractive"
      />
      <Customizer
        cardSettings="Page Settings"
        cardFilterMessage="Select to apply filter"
        daily="Daily"
        weekly="Weekly"
        monthly="Monthly"
        yearly="Yearly"
      />
      <MainDashContent />
    </>
  );
};

export default DashboardMain;
