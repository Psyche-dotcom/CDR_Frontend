// components/DateInput.tsx
import React from "react";

interface DateInputProps {
  label: string;
  id: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, id }) => (
  <div className="col-md-6">
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control datetimepicker"
        placeholder=""
        id={id}
        autoComplete="off"
      />
    </div>
  </div>
);

export default DateInput;
