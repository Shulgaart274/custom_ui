import React, { useState, useEffect } from "react";
import "./input.scss";

const TextInput = ({
  variant = "primary",
  defaultValue = "Awww",
  placeholder,
  disabled,
  onChange = () => {},
  onPressEnter = () => {},
  id,

  maxLength = 32,
  label,
  name,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = ({ target }) => setValue(target.value);
  useEffect(() => {
    onChange({ [name]: value });
  }, [value, name, onChange]);

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      onPressEnter({ [name]: value });
    }
  };

  // if (value.length > maxLength) {
  // }

  const theme = () => {
    switch (variant) {
      case "primary":
        return "label-name";
      case "secondary":
        return "label-name-secondary";
      case "dark":
        return "label-name-dark";
      default:
        return "label-name";
    }
  };

  return (
    <div className="form">
      <input
        variant={variant}
        maxLength={maxLength}
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={handlePressEnter}
        onChange={handleInputChange}
        value={value}
        required
      />
      <label htmlFor={name} className={theme()}>
        <span className="content-name">{label}</span>
      </label>
    </div>
  );
};

export default TextInput;
