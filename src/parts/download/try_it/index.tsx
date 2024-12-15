import { LiquidButton } from "@/components/Buttons/liquid_button";
import React from "react";

const TryItOut = () => {
  return (
    <section className="section-top-download">
      <div className="custom-container">
        <h1>Try The CDR Cloud now!</h1>

        {/* <p>Users we have reached so far</p>
        <div className="progress">
          <div className="bar" style={{ width: "35%" }}></div>
          <span className="progress-text">CDR</span>
          <span className="progress-number">35,929</span>
        </div> */}

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
};

export default TryItOut;
