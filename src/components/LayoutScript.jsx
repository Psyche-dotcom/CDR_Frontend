"use client";
import Script from "next/script";
import React from "react";

const LayoutScript = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"
      ></script>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="/app-assets/vendors/js/vendors.min.js"
        type="text/javascript"
      />
      <Script
        src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"
        strategy="lazyOnload"
        type="text/javascript"
      />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="/app-assets/js/core/app-menu.js" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="/app-assets/js/core/app.js" type="text/javascript" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="/app-assets/js/scripts/customizer.js"
        type="text/javascript"
      ></script>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="/app-assets/vendors/js/datetimepicker/jquery.datetimepicker.full.min.js" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/kineticjs/5.2.0/kinetic.js" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="/app-assets/enjoy-hint/enjoyhint.min.js"></script>
      <Script
        src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/app-assets/sweetalert/sweetalert.min.js"
        strategy="lazyOnload"
      ></Script>
      <Script
        src="/app-assets/page-scripts/layout.js"
        strategy="lazyOnload"
      ></Script>
    </>
  );
};

export default LayoutScript;
