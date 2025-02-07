import React from "react";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, any> | null>>;
  formData: Record<string, any> | null;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  formData,
  setFormData,
}) => {
  if (!isOpen) return null;
  const handleSubmit = (data: any) => {
    console.log(formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className="modal fade text-left show"
      id="create-user-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel25"
      // aria-hidden={!isOpen}
      style={{
        display: isOpen ? "block" : "hidden",
        backdropFilter: "blur(3px)", // Adding the blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari support
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <label
              className="modal-title text-text-bold-600"
              id="myModalLabel25"
            >
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
            <form id="form-phonebook" onSubmit={handleSubmit}>
              <div
                asp-validation-summary="All"
                className="text-danger"
                style={{ display: "none" }}
              ></div>
              <input
                type="hidden"
                name="idphonebook"
                value={formData?.phonenumber || ""}
                onChange={handleChange}
              />
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder=""
                  value={formData?.firstname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder=""
                  value={formData?.lastname || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder=""
                  value={formData?.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="phonenumber"
                  placeholder=""
                  value={formData?.phonenumber || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  placeholder=""
                  value={formData?.company || ""}
                  onChange={handleChange}
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
              onClick={handleSubmit}
              type="button"
              className="btn btn-outline-primary"
              id="CreateUserButton"
            >
              Save & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
