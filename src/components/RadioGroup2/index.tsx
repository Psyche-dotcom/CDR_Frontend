// RadioGroup.tsx
import { ReactNode } from "react";

type RadioOption = {
  value: string;
  label: string;
  checked?: boolean;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
};

const RadioGroup2 = ({ name, options }: RadioGroupProps) => (
  <div>
    {options.map((option, index) => (
      <fieldset className="radio" key={index}>
        <label>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={option.checked}
            className="option-input radio"
          />
          {option.label}
        </label>
      </fieldset>
    ))}
  </div>
);

export default RadioGroup2;
