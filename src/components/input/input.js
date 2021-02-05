import React from "react";
import "./input.scss";

const TextInput = ({
  defaultValue = "Lina is Awesome",
  placeholder,
  disabled,
  onChange,
  onPressEnter,
  id,
  value,
  maxLength = 32,
  label,
}) => {
  //  const handleKeyDown = (e) => {
  //     const { onPressEnter, onKeyDown } = props;
  //     if (e.keyCode === 13 && onPressEnter) {
  //       onPressEnter(e);
  //     }
  //     if (onKeyDown) {
  //       onKeyDown(e);
  //     }
  //   };

  return (
    <div className="form">
      <input
        type="text"
        id={id}
        name={label}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        required
      />
      <label htmlFor={label} className="label-name">
        <span className="content-name">{label}</span>
      </label>
    </div>
  );
};

export default TextInput;
