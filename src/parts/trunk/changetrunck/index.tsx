import React from "react";

const ChangeTrunk = () => {
  return (
    <div
      className="modal fade text-left"
      id="default-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel1"
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel1">
              Change Trunk
              {/* {localize("CDR_ChangeTrunk")} */}
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div
              className="alert bg-info alert-icon-left alert-dismissible mt-1"
              role="alert"
            >
              <span className="alert-icon">
                <i className="la la-info"></i>
              </span>
              You can select maximum 3 Trunks
              {/* {localize("CDR_EnCok3SecimYap")} */}
            </div>
            <div className="row" id="trunk-modal-container"></div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn grey btn-outline-secondary"
              data-dismiss="modal"
            >
              Close
              {/* {localize("CDR_Close")} */}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="ChangeTrunkView"
            >
              Save Changes
              {/* {localize("CDR_SaveChanges")} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeTrunk;
