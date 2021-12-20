import React from "react";
import Icon from "components/Icon";

interface IInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  icon?: string;
}

const Input: React.FC<IInput> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
}): JSX.Element => {
  return (
    <div className={`input-component`}>
      <input
        className={`input ${icon && "withIcon"}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />

      {icon && (
        <span className="icon-wrapper">
          <Icon type={icon} />
        </span>
      )}
    </div>
  );
};

export default Input;
