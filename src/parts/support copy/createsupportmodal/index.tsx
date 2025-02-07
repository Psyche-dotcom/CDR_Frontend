"use client";

import { useState } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateSupportModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [supportMessage, setSupportMessage] = useState<string>("");

  const handleSelectChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleMessageChange = (event: any) => {
    setSupportMessage(event.target.value);
  };
  const handleSubmit = () => {
    console.log(supportMessage, selectedCategory);
  };
  return (
    <div
      className="modal fade text-left show"
      id="CreateSupportModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="CreateSupportModalLabel"
      aria-hidden="true"
      style={{
        display: isOpen ? "block" : "none",
        backdropFilter: "blur(3px)", // Adding the blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari support
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
      }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create Ticket
            </h5>
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
            <form id="form-add-support-information">
              <div className="form-group">
                <label>Support Categories</label>
                <select
                  className="form-control bselect Setted"
                  data-live-search="true"
                  name="SupportCategoryId"
                  style={{ width: "100%" }}
                  tabIndex={-1}
                  aria-hidden="true"
                  value={selectedCategory}
                  onChange={handleSelectChange}
                >
                  <option value="0" selected disabled>
                    Please select a category
                  </option>
                  <option value="5">Support</option>
                  <option value="10">Ideas</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  name="SupportMessage"
                  style={{ height: "225px", resize: "none" }}
                  value={supportMessage}
                  onChange={handleMessageChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="AddSupport"
              onClick={handleSubmit}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSupportModal;
