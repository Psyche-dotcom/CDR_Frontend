"use client";
import CheckBox from "@/components/Input/checkbox";
import React, { useState } from "react";

const ChangeTrunk = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, value: "9000", checked: false, name: " WebMeeting bridge" },
    { id: 2, value: "16676", checked: true, name: " WebMeeting" },
    { id: 3, value: "124235456", checked: false, name: "bridge" },
  ]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.value === value ? { ...checkbox, checked } : checkbox
      )
    );
  };
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
            <div className="row" id="trunk-modal-container">
              {checkboxes.map((checkbox) => (
                <CheckBox
                  key={checkbox.id}
                  value={checkbox.value}
                  checked={checkbox.checked}
                  name={checkbox.name}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
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
