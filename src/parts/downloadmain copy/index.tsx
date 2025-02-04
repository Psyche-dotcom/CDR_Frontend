"use client";

import DownloadSteps from "./DownloadSteps";
import DownloadSlider from "./download_slider";
import "../../css/download.css";
import Script from "next/script";
import LinuxSlider from "./linuxslider";
import { useState } from "react";
import DownloadCard from "@/components/Card/download_card copy";
const DownloadMain = () => {
  const [showWindowDownload, setShowWindowDownload] = useState<boolean>(false);
  const [showLinuxDownload, setShowLinuxDownload] = useState<boolean>(false);
  const localization = {
    title: "Download",
    windows: {
      title: "Download for Windows",
      description:
        "You should download and install CDR service on 3CX IP PBX pc or Server which uses WINDOWS operating system .",
      downloadButtonText: "Download for Windows",
      documentButtonText: "Document for Windows",
    },
    linux: {
      title: "Download for Linux",
      description:
        "You should download and install CDR service on 3CX IP PBX pc or Server which uses Linux operating system",
      downloadButtonText: "Download Linux",
      documentButtonText: "Document for Linux",
    },

    CDR_Download_Title2: "How It Works?",
    CDR_Download_Card_Title: "Download",
    CDR_Download_Card_Description:
      "Please download the CDR service depends on operating system which 3CX IP PBX installed",
    CDR_Download_Card_Title2: "Install",
    CDR_Download_Card_Description2:
      "Please read the installation guide below before installing",
    CDR_Download_Card_Title3: "Configure",
    CDR_Download_Card_Description3:
      "Please finish the FQDN and IP settings after installation completed",
  };
  return (
    <>
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />

      <link rel="stylesheet" href="/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
      {/* <Script
        src="/app-assets/page-scripts/download.js"
        strategy="afterInteractive"
      /> */}
      <section className="download-page" id="downloadpage">
        <DownloadCard
          title={localization.title}
          windows={localization.windows}
          linux={localization.linux}
          setShowWindowDownload={setShowWindowDownload}
          setShowLinuxDownload={setShowLinuxDownload}
        />
        <DownloadSteps localizationData={localization} />
      </section>
      {showWindowDownload && <DownloadSlider />}
      {showLinuxDownload && <LinuxSlider />}
    </>
  );
};

export default DownloadMain;
