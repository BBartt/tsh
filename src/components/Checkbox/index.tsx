import React from "react";

interface ICheckbox {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean | undefined;
  label?: string;
}

const Checkbox: React.FC<ICheckbox> = ({
  label,
  checked,
  onChange,
}): JSX.Element => {
  return (
    <label className="checkbox-component">
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
