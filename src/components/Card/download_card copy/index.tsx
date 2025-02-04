"use client";
import { routes } from "@/services/api_route";
import HttpService from "@/services/httpServices";
import { useState } from "react";

interface DownloadCardProps {
  title: string;
  windows: {
    title: string;
    description: string;
    downloadButtonText: string;
    documentButtonText: string;
  };
  linux: {
    title: string;
    description: string;
    downloadButtonText: string;
    documentButtonText: string;
  };
  setShowWindowDownload: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLinuxDownload: React.Dispatch<React.SetStateAction<boolean>>;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  windows,
  linux,
  setShowLinuxDownload,
  setShowWindowDownload,
}) => {
  const [downloadInProgress, setDownloadInProgress] = useState({
    windows: false,
    linux: false,
  });

  const handleDownload = async (
    url: string,
    fileName: string,
    type: "windows" | "linux"
  ) => {
    if (downloadInProgress[type]) return;

    setDownloadInProgress((prevState) => ({ ...prevState, [type]: true }));
    try {
      const httpService = new HttpService();
      const data = await httpService.getData(url);

      triggerDownload(data.data, fileName);
    } catch (error) {
      alert(
        `Failed to download ${type === "windows" ? "Windows" : "Linux"} file.`
      );
      console.error(error);
    } finally {
      setDownloadInProgress((prevState) => ({ ...prevState, [type]: false }));
    }
  };

  const triggerDownload = (data: Blob, fileName: string) => {
    if (!data) {
      alert("There was an error with the file download.");
      return;
    }

    const blob = new Blob([data], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="card download-card">
      <div className="card-header">
        <h4 className="card-title">
          <img src="/app-assets/images/download-page/hand.png" alt="hand" />
          {title}
        </h4>
      </div>
      <div className="card-content collapse show">
        <div className="card-body">
          <div className="row">
            {/* Windows Section */}
            <div className="col-md-6 win">
              <h1>{windows.title}</h1>
              <img
                className="download-icons"
                src="/app-assets/images/download-windows.svg"
                alt="Windows Icon"
              />
              <p>{windows.description}</p>
              <div className="card-footer">
                <div
                  className="DownloadButton"
                  data-item="DownloadWindows"
                  onClick={() => {
                    setShowWindowDownload(true);
                    setShowLinuxDownload(false);
                    handleDownload(
                      routes.windowDownloadUrl(),
                      "Cdrcloud.zip",
                      "windows"
                    );
                  }}
                >
                  <p>{windows.downloadButtonText}</p>
                  <img
                    src="/app-assets/images/download-page/win-button.png"
                    alt="Windows Download"
                  />
                </div>
                <a className="DocumentButton" data-item="DownloadWindows">
                  <p>{windows.documentButtonText}</p>
                  <img
                    src="/app-assets/images/download-page/document-button.png"
                    alt="Document Button"
                  />
                </a>
              </div>
            </div>

            {/* Linux Section */}
            <div className="col-md-6">
              <h1>{linux.title}</h1>
              <img
                className="download-icons"
                src="/app-assets/images/download-linux.svg"
                alt="Linux Icon"
              />
              <p>{linux.description}</p>
              <div className="card-footer">
                <div
                  className="DownloadButton"
                  data-item="DownloadLinux"
                  onClick={() => {
                    setShowLinuxDownload(true);
                    setShowWindowDownload(false);
                    handleDownload(
                      routes.debisnDownloadUrl(),
                      "cdr-service-v18.deb",
                      "linux"
                    );
                  }}
                >
                  <p>{linux.downloadButtonText}</p>
                  <img
                    src="/app-assets/images/download-page/lin-button.png"
                    alt="Linux Download"
                  />
                </div>
                <a className="DocumentButton" data-item="DownloadLinux">
                  <p>{linux.documentButtonText}</p>
                  <img
                    src="/app-assets/images/download-page/document-button.png"
                    alt="Document Button"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
