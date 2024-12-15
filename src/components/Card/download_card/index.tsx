import Image from "next/image";
import Link from "next/link";

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
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  windows,
  linux,
}) => {
  return (
    <div className="card download-card">
      <div className="card-header">
        <h4 className="card-title">
          <Image
            src="/app-assets/images/download-page/hand.png"
            alt="Hand icon"
            width={24}
            height={24}
          />
          {title}
        </h4>
      </div>
      <div className="card-content collapse show">
        <div className="card-body">
          <div className="row">
            {/* Windows Download Section */}
            <div className="col-md-6 win">
              <h1>{windows.title}</h1>
              <Image
                className="download-icons"
                src="/app-assets/images/download-windows.svg"
                alt="Windows Icon"
                width={32}
                height={32}
              />
              <p>{windows.description}</p>
              <div className="card-footer">
                <Link
                  href="/Home/DownloadWindows"
                  target="_blank"
                  data-item="DownloadWindows"
                  passHref
                >
                  <a className="DownloadButton">
                    <p>{windows.downloadButtonText}</p>
                    <Image
                      src="/app-assets/images/download-page/win-button.png"
                      alt="Download Windows"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
                <a className="DocumentButton" data-item="DownloadWindows">
                  <p>{windows.documentButtonText}</p>
                  <Image
                    src="/app-assets/images/download-page/document-button.png"
                    alt="Windows Document"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
            </div>

            {/* Linux Download Section */}
            <div className="col-md-6">
              <h1>{linux.title}</h1>
              <Image
                className="download-icons"
                src="/app-assets/images/download-linux.svg"
                alt="Linux Icon"
                width={32}
                height={32}
              />
              <p>{linux.description}</p>
              <div className="card-footer">
                <Link
                  href="/Home/DownloadDebian"
                  target="_blank"
                  data-item="DownloadLinux"
                  passHref
                >
                  <a className="DownloadButton">
                    <p>{linux.downloadButtonText}</p>
                    <Image
                      src="/app-assets/images/download-page/lin-button.png"
                      alt="Download Linux"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
                <a className="DocumentButton" data-item="DownloadLinux">
                  <p>{linux.documentButtonText}</p>
                  <Image
                    src="/app-assets/images/download-page/document-button.png"
                    alt="Linux Document"
                    width={32}
                    height={32}
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
