"use client";

import React, { useState, useEffect } from "react";
import IPhide from "./iphide";
import AllCallCard from "./allcallcard";
import ChangeTrunk from "./changetrunck";
import Script from "next/script";
import "../../css/trunk.css";
const TrunkMain2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedIds, setCheckedIds] = useState<any>();
  const [checkboxes, setCheckboxes] = useState([
    { id: "1", value: "9000", checked: false, name: " WebMeeting bridge" },
    { id: "2", value: "16676", checked: true, name: " WebMeeting" },
    { id: "3", value: "124235456", checked: false, name: "bridge" },
  ]);
  useEffect(() => {
    // Filter the checkboxes to get the ones that are checked, then map to get the ids
    const updatedCheckedIds = checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id);
    setCheckedIds(updatedCheckedIds);
  }, [checkboxes]);
  return (
    <>
      {/* <link
        href="/app-assets/vendors/css/tables/datatable/datatables.min.css"
        rel="stylesheet"
      /> */}

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
      {/* <Script
        src="/app-assets/vendors/js/tables/datatable/datatables.min.js"
        strategy="afterInteractive"
      /> */}
      <Script
        src="/app-assets/Scripts/signalr.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/app-assets/page-scripts/timespan.js"
        strategy="afterInteractive"
      />
      {/* <Script
        src="/app-assets/page-scripts/trunk.js"
        strategy="afterInteractive"
      /> */}
      {/* <Script src="/js/trunkpart.js" strategy="afterInteractive" /> */}
      <IPhide setIsOpen={setIsOpen} checkboxes={checkedIds} />
      <AllCallCard />
      <ChangeTrunk
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        checkboxes={checkboxes}
        setCheckboxes={setCheckboxes}
      />
    </>
  );
};

export default TrunkMain2;
