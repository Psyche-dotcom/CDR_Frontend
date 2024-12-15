import React from "react";

interface InputFieldProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="wrap-input100 validate-input">
      <input
        className="input100"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className="focus-input100" data-placeholder="&#xf207;"></span>
    </div>
  );
};

export default InputField;
