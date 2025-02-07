interface DeleteProps {
  isDeleteOpen: boolean;
  onClose: () => void;
}

export default function DeleteUserModal({
  isDeleteOpen,
  onClose,
}: DeleteProps) {
  return (
    <div
      className="sweet-overlay"
      tabIndex={-1}
      style={{ opacity: 1.06, display: isDeleteOpen ? "block" : "none" }}
    >
      <div
        className="sweet-alert showSweetAlert visible"
        data-custom-class=""
        data-has-cancel-button="true"
        data-has-confirm-button="true"
        data-allow-outside-click="false"
        data-has-done-function="true"
        data-animation="pop"
        data-timer="null"
        style={{ display: "block", marginTop: "-170px" }}
      >
        <div className="sa-icon sa-error" style={{ display: "none" }}>
          <span className="sa-x-mark">
            <span className="sa-line sa-left"></span>
            <span className="sa-line sa-right"></span>
          </span>
        </div>
        <div
          className="sa-icon sa-warning pulseWarning"
          style={{ display: "block" }}
        >
          <span className="sa-body pulseWarningIns"></span>
          <span className="sa-dot pulseWarningIns"></span>
        </div>
        <div className="sa-icon sa-info" style={{ display: "none" }}></div>
        <div className="sa-icon sa-success" style={{ display: "none" }}>
          <span className="sa-line sa-tip"></span>
          <span className="sa-line sa-long"></span>

          <div className="sa-placeholder"></div>
          <div className="sa-fix"></div>
        </div>
        <div className="sa-icon sa-custom" style={{ display: "none" }}></div>
        <h2>Are You Sure</h2>
        <p style={{ display: "block" }}>
          1 Adet Veriyi Silmek İstediğinize Emin Misiniz
        </p>
        <fieldset>
          <input type="text" tabIndex={3} placeholder="" />
          <div className="sa-input-error"></div>
        </fieldset>
        <div className="sa-error-container">
          <div className="icon">!</div>
          <p>Not valid!</p>
        </div>
        <div className="sa-button-container">
          <button
            className="cancel"
            tabIndex={2}
            style={{ display: "inline-block" }}
            onClick={onClose}
          >
            Cancel
          </button>
          <div className="sa-confirm-button-container">
            <button
              className="confirm"
              tabIndex={1}
              style={{
                display: "inline-block",
                backgroundColor: "rgb(221, 107, 85)",
                boxShadow:
                  "rgba(221, 107, 85, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px inset",
              }}
            >
              Delete
            </button>
            <div className="la-ball-fall">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
