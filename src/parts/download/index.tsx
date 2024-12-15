import React from "react";

import SectionTopDownload from "./download_hero";

import Script from "next/script";
import EasyStepDownload from "./easy_step";
import DashboardShowSection from "./dashbaord_show";
import CloudFeature from "./cloud_feature";
import WhatYouGet from "./what_you_get";
import TryItOut from "./try_it";
import Testimonial from "./testimonial";
import Pricing from "./pricing";
import Installation from "./installation";

const DownloadIndex = () => {
  return (
    <>
      <Script src="/js/script/liquidscript.js" strategy="afterInteractive" />

      <div className="pattern-layer"></div>
      <SectionTopDownload />
      <DashboardShowSection />
      <EasyStepDownload />
      <CloudFeature />
      <WhatYouGet />
      <TryItOut />
      <Testimonial />
      <Pricing />
      <Installation />
    </>
  );
};

export default DownloadIndex;
