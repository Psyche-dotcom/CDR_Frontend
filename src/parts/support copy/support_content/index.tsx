import SupportCardInfo from "@/components/Card/support_card";
import React from "react";

const SupportContent = () => {
  return (
    <>
      <div className="support">
        <div className="row">
          <div className="col-md-3">
            <div className="topics">
              <div className="card-content">
                <ul className="support-list" id="support-list">
                  <SupportCardInfo
                    cat={""}
                    date={""}
                    subject={""}
                    subinfo={""}
                  />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 support-image">
            <div className="card card-back">
              <div id="support-detail-information"></div>

              <div id="support-message-container"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="CreateSupportModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="CreateSupportModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content"></div>
        </div>
      </div>
    </>
  );
};

export default SupportContent;
