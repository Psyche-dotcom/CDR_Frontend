import { LiquidButton } from "@/components/Buttons/liquid_button";

const SectionTopDownload: React.FC = () => (
  <section className="section-top-download">
    <div className="custom-container">
      <h1>Get the CDR Cloud App</h1>
      <p>
        Simple to download and install. Free for 30 days. No strings attached.
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
      <span
        style={{
          display: "block",
          color: "#c5c5c5",
          fontSize: "12px",
          marginTop: "-28px",
        }}
      >
        Your download will start after login
      </span>
    </div>
  </section>
);

export default SectionTopDownload;
