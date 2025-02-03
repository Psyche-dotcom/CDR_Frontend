import React from "react";

interface CheckBoxProps {
  value: string;
  checked: boolean;
  name: string;
  onChange: (value: string, checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  value,
  checked,
  name,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, event.target.checked);
  };

  return (
    <div className="col-md-6">
      <fieldset className="checkboxsas">
        <label>
          <input
            type="checkbox"
            className="option-input checkbox"
            value={value}
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {name}
        </label>
      </fieldset>
    </div>
  );
};

export default CheckBox;
