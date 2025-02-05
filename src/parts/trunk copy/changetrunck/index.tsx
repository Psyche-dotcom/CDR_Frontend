"use client";
import CheckBox from "@/components/Input/checkbox";
import React, { useState } from "react";

const ChangeTrunk = ({
  isOpen,
  onClose,
  setCheckboxes,
  checkboxes,
}: {
  isOpen: boolean;
  onClose: () => void;
  setCheckboxes: any;
  checkboxes: any;
}) => {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    setCheckboxes((prevCheckboxes: any) =>
      prevCheckboxes.map((checkbox: any) =>
        checkbox.value === value ? { ...checkbox, checked } : checkbox
      )
    );
  };
  return (
    <div
      className="modal fade text-left show"
      id="default-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myModalLabel1"
      aria-hidden="true"
      style={{
        display: isOpen ? "block" : "none",
        backdropFilter: "blur(3px)", // Adding the blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari support
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
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
              onClick={onClose}
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
              {checkboxes.map((checkbox: any) => (
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
              onClick={onClose}
            >
              Close
              {/* {localize("CDR_Close")} */}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="ChangeTrunkView"
              onClick={onClose}
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
