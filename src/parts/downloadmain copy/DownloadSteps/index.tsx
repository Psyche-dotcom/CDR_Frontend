import React from "react";

interface LocalizationData {
  CDR_Download_Title2: string;
  CDR_Download_Card_Title: string;
  CDR_Download_Card_Description: string;
  CDR_Download_Card_Title2: string;
  CDR_Download_Card_Description2: string;
  CDR_Download_Card_Title3: string;
  CDR_Download_Card_Description3: string;
}

interface Props {
  localizationData: LocalizationData;
}

const DownloadSteps: React.FC<Props> = ({ localizationData }) => {
  return (
    <div className="card card-step">
      <div className="card-header">
        <div className="text-center">
          <h2 className="font-weight-bold display-4">
            {localizationData.CDR_Download_Title2}
          </h2>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {/* Step 1 */}
          <div className="col-md-4">
            <a className="bg-light position-relative px-3">
              <div className="number font-weight-bold text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                1
              </div>
              <div className="px-3 text-center pb-3">
                <h1>{localizationData.CDR_Download_Card_Title}</h1>
                <p className="font-weight-light my-3">
                  {localizationData.CDR_Download_Card_Description}
                </p>
              </div>
            </a>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <a className="bg-light position-relative px-3">
              <div className="number font-weight-bold text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                2
              </div>
              <div className="px-3 text-center pb-3">
                <h1>{localizationData.CDR_Download_Card_Title2}</h1>
                <p className="font-weight-light my-3">
                  {localizationData.CDR_Download_Card_Description2}
                </p>
              </div>
            </a>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <a className="bg-light position-relative px-3">
              <div className="number font-weight-bold text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                3
              </div>
              <div className="px-3 text-center pb-3">
                <h1>{localizationData.CDR_Download_Card_Title3}</h1>
                <p className="font-weight-light my-3">
                  {localizationData.CDR_Download_Card_Description3}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSteps;
