import React from "react";
import IPhide from "./iphide";
import AllCallCard from "./allcallcard";
import ChangeTrunk from "./changetrunck";
import Script from "next/script";
import "../../css/trunk.css";
const TrunkMain = () => {
  return (
    <>
      <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      />
      <Script
        src="/app-assets/amchart-trunk/core.js"
        strategy="afterInteractive"
      />

      <Script
        src="/app-assets/amchart-trunk/charts.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/amchart-trunk/animated.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/Scripts/signalr.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/timespan.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/trunk.js"
        strategy="afterInteractive"
      />
      <Script src="/js/trunkpart.js" strategy="afterInteractive" />
      <IPhide />
      <AllCallCard />
      <ChangeTrunk />
    </>
  );
};

export default TrunkMain;
