import React from "react";
import PropTypes from "prop-types";
import "./checkbox.scss";

const Checkbox = ({
  checked,
  onChange,
  size = "25px",
  color = "primary",
  labelSize = "14px",
  label = "Checkbox label",
  id,
  required,
  disabled,
}) => {
  const checkMarkTheme = () => {
    switch (color) {
      case "primary":
        return "checkmark-primary";
      case "secondary":
        return "checkmark-secondary";
      case "dark":
        return "checkmark-dark";
      default:
        return "checkmark-primary";
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        id={id}
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      <span
        className={checkMarkTheme()}
        style={{ width: size, height: size }}
      ></span>
      <span className="checkbox-label" style={{ fontSize: labelSize }}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "dark"]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  labelSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
