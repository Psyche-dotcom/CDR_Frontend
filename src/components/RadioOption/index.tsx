interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  dataPlaceholder?: string;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  name,
  value,
  label,
  checked = false,
  dataPlaceholder,
}) => (
  <fieldset className="radio">
    <label>
      <input
        type="radio"
        className="option-input radio"
        name={name}
        value={value}
        defaultChecked={checked}
        data-placeholder={dataPlaceholder}
      />
      {label}
    </label>
  </fieldset>
);
export default RadioOption;
