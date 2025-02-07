"use client";
import React from "react";

type ExportModalProps = {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  localizationService: {
    getLocalization: (key: string) => { Data: string };
  };
};

const ExportModal: React.FC<ExportModalProps> = ({
  onFileChange,

  localizationService,
}) => {
  return (
    <div
      className="modal fade text-left"
      id="ExportModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel25"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <label
              className="modal-title text-text-bold-600"
              id="myModalLabel25"
            >
              {
                localizationService.getLocalization("CDR_AddCotactsFromExcel")
                  .Data
              }
            </label>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body text-center">
            <p style={{ marginTop: 15 }}>
              <img
                src="/app-assets/images/excel-logo.png"
                style={{ width: 30 }}
                alt="Excel Logo"
              />{" "}
              {localizationService.getLocalization("CDR_SelectXlsFile").Data}
            </p>
            <input
              type="file"
              id="file"
              accept=".xlsx, .xls, .csv"
              className="form-control"
              style={{ background: "#ececec" }}
              onChange={onFileChange}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn grey btn-outline-secondary"
              data-dismiss="modal"
            >
              {localizationService.getLocalization("CDR_Cancel").Data}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              id="AddExcel"
            >
              {localizationService.getLocalization("CDR_Upload").Data}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
