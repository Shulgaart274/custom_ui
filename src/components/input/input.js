import React, { useState, useEffect } from "react";
import "./input.scss";

const TextInput = ({
  variant = "second",
  color = "primary",
  defaultValue = "Defaultvalue",
  placeholder,
  disabled,
  onChange = () => {},
  onPressEnter = () => {},
  id,
  required,
  maxLength = 32,
  label,
  name,
  requiredHelper = "Поле не может быть пустым!",
  widthInput = "100%",
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = ({ target }) => {
    setValue(target.value);
  };

  useEffect(() => {
    onChange({ [name]: value });
  }, [value, name, onChange]);

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      onPressEnter({ [name]: value });
    }
  };

  const variantLabelHidden = () => {
    switch (variant) {
      case "first":
        return "label-hidden";
      case "second":
        return "label-hidden-second";
      case "third":
        return "label-hidden";
      case "fourth":
        return "label-hidden";
      default:
        return "label-hidden";
    }
  };

  const variantInput = () => {
    switch (variant) {
      case "first":
        return "custom-field";
      case "second":
        return "custom-field second";
      case "third":
        return "custom-field third";
      case "fourth":
        return "custom-field fourth";
      default:
        return "custom-field";
    }
  };

  const themeColor = () => {
    switch (color) {
      case "primary":
        return "primary";
      case "secondary":
        return "secondary";
      case "dark":
        return "dark";

      default:
        return "primary";
    }
  };

  const isLabelShown = value.length > 0 ? variantLabelHidden() : "label";

  return (
    <label
      className={`${variantInput()} ${themeColor()}`}
      style={{ width: widthInput }}
      requirederror={value.length < 1 && required ? requiredHelper : ""}
    >
      <input
        className={`text-input ${themeColor()}`}
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
        required={required}
      />
      <span className={`${isLabelShown} ${themeColor()}`}>
        {required ? `${label}*` : label}
      </span>
      <span className={`border ${themeColor()}`}></span>
    </label>
  );
};

export default TextInput;

// <div className="form">

/* <input
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
      </label> */

// </div>
