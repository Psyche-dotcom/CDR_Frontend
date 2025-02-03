import React from "react";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal fade text-left show"
      id="create-user-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel25"
      aria-hidden={!isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-header">
          <label className="modal-title text-text-bold-600" id="myModalLabel25">
            Create User
          </label>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form id="form-phonebook">
            <div
              asp-validation-summary="All"
              className="text-danger"
              style={{ display: "none" }}
            ></div>
            <input type="hidden" name="idphonebook" defaultValue="" />
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="FirstName"
                placeholder=""
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="text"
                className="form-control"
                name="LastName"
                placeholder=""
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="Email"
                placeholder=""
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                name="MobileNumber"
                placeholder=""
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                name="Company"
                placeholder=""
                defaultValue=""
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn grey btn-outline-secondary"
            data-dismiss="modal"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            id="CreateUserButton"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
