import { LiquidButton } from "@/components/Buttons/liquid_button";
import React from "react";

const EasyStepDownload: React.FC = () => (
  <section className="section-text-download" style={{ paddingTop: 0 }}>
    <div className="custom-container">
      <span>Easy</span>
      <h1>As simple as 1-2-3</h1>
      <p>
        With a smooth interface, easy to use and administer, you can pull out
        the essential information about your PBX in a matter of minutes.
      </p>
      <LiquidButton
        id="windows-down"
        text="Download For Windows"
        color1="#FFF500"
        color2="#20D8F9"
        color3="#20D8F9"
        href="/Home/DownloadWindows"
      />
      <LiquidButton
        id="linux-down"
        text="Download For Linux"
        color1="#FFF500"
        color2="#FB92F7"
        color3="#FB92F7"
        href="/Home/DownloadDebian"
      />
    </div>
  </section>
);

export default EasyStepDownload;
