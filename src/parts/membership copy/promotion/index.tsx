import React from "react";

const Promotion = () => {
  return (
    <div
      className="modal fade text-left"
      id="UsePromotionCodeModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel1"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel1">
              Promotion Code
              {/* {_staticService.GetLocalization("CDR_PromotionCode").Data} */}
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
            <input
              type="text"
              id="txtPromotionCode"
              className="form-control"
              required
            />
          </div>
          <div className="modal-footer">
            <div className="fixed-div"></div>
            <button
              type="button"
              className="btn grey btn-outline-secondary"
              data-dismiss="modal"
            >
              Close
              {/* {_staticService.GetLocalization("CDR_Close").Data} */}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              id="btnUsePromotionCode"
            >
              Apply
              {/* {_staticService.GetLocalization("CDR_Kullan").Data} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
