import React from "react";
import PropTypes from "prop-types";

const Icon = ({
  icons,
  iconName = "",
  style = {},
  fill = "#222",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
  theme,
}) => {
  const params = { fill };

  const processSvg = (iconName) => {
    const icon = icons.find((item) => item.iconName === iconName);

    return icon;
  };

  const svg = icons && processSvg(iconName);
  if (!svg) return null;
  return (
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || svg.viewBox}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      theme={theme}
    >
      {svg.svg(params)}
    </svg>
  );
};

export default Icon;

Icon.propTypes = {
  iconName: PropTypes.string,
  fill: PropTypes.string || PropTypes.object,
  viewBox: PropTypes.string,
  height: PropTypes.number || PropTypes.string,
  width: PropTypes.number || PropTypes.string,
  className: PropTypes.string || PropTypes.object,
};
