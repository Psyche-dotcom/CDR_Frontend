import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  title: string;
  imageSrc: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  title,
  imageSrc,
}) => (
  <div className="col-md-2">
    <h4 className="form-section calls-datefilter">
      <img src={imageSrc} alt="" /> {title}
    </h4>
    {options.map((option) => (
      <fieldset className="radio" key={option.value}>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name={name}
            value={option.value}
          />
          {option.label}
        </label>
      </fieldset>
    ))}
  </div>
);

export default RadioGroup;
