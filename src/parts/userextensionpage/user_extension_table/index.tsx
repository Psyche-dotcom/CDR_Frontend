import React from "react";

interface UserExtensionTableProps {
  localizations: Record<string, string>;
}

const UserExtensionTable: React.FC<UserExtensionTableProps> = ({
  localizations,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">
              {localizations["CDR_CallReportsLastData"]}
            </h4>
            <a className="heading-elements-toggle">
              <i className="la la-ellipsis-v font-medium-3"></i>
            </a>
            <div className="heading-elements"></div>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col-md-12">
                <ul className="nav nav-tabs nav-linetriangle no-hover-bg call-info-filter">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="detail-tab-1"
                      data-type="1"
                      data-toggle="tab"
                      aria-controls="tab41"
                      href="#detail-tab-1-content"
                      aria-expanded="true"
                    >
                      {localizations["CDR_AllCalls"]}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="detail-tab-2"
                      data-type="2"
                      data-toggle="tab"
                      aria-controls="tab42"
                      href="#detail-tab-2-content"
                      aria-expanded="false"
                    >
                      {localizations["CDR_InboundCalls"]}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="detail-tab-3"
                      data-type="3"
                      data-toggle="tab"
                      aria-controls="tab43"
                      href="#detail-tab-3-content"
                      aria-expanded="false"
                    >
                      {localizations["CDR_OutboundCalls"]}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="detail-tab-4"
                      data-type="4"
                      data-toggle="tab"
                      aria-controls="tab44"
                      href="#detail-tab-4-content"
                      aria-expanded="false"
                    >
                      {localizations["CDR_MissedCalls"]}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="detail-tab-5"
                      data-type="5"
                      data-toggle="tab"
                      aria-controls="tab45"
                      href="#detail-tab-5-content"
                      aria-expanded="false"
                    >
                      {localizations["CDR_Ext2ExtCalls"]}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-12">
                <div className="row text-right">
                  <div className="col-md-12" style={{ paddingRight: "24px" }}>
                    <a className="exportExcel">
                      <img
                        src="/app-assets/images/excel-icon.svg"
                        alt="Export to Excel"
                        style={{ width: "40px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="table-responsive">
                  <table
                    className="table table-de mb-0 report-table display nowrap table-hover"
                    id="CallInfoTable"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>{localizations["CDR_CallId"]}</th>
                        <th>{localizations["CDR_Date"]}</th>
                        <th>{localizations["CDR_StartTime"]}</th>
                        <th>{localizations["CDR_From"]}</th>
                        <th>{localizations["CDR_To"]}</th>
                        <th>{localizations["CDR_Type"]}</th>
                        <th>{localizations["CDR_Duration"]}</th>
                        <th>{localizations["CDR_TalkTime"]}</th>
                        <th>{localizations["CDR_RingTime"]}</th>
                        <th>{localizations["CDR_StopTime"]}</th>
                        <th>{localizations["CDR_Status"]}</th>
                        <th className="all"></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExtensionTable;
