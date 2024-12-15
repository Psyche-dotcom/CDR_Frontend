import DownloadCard from "@/components/Card/download_card";

const DownloadMain = () => {
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
      description: "Get the latest version for Linux.",
      downloadButtonText: "Download Linux",
      documentButtonText: "Linux Documentation",
    },
  };
  return (
    <>
      <section className="download-page" id="downloadpage">
        <DownloadCard
          title={localization.title}
          windows={localization.windows}
          linux={localization.linux}
        />
      </section>
    </>
  );
};

export default DownloadMain;
