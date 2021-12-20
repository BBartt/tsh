import Loader from "components/Loader/loader";
import React from "react";

interface IButton {
  children: string;
  onClick: (param: any) => any;
  isLoading?: boolean;
  isDisabled?: boolean;
  hasOutline?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  onClick,
  isLoading,
  isDisabled,
  hasOutline,
}): JSX.Element => {
  return (
    <button
      disabled={isDisabled}
      className={`button${hasOutline ? " outline" : ""}`}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
