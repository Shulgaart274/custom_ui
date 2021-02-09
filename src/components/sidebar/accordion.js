import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Icon from "./icon";
import { SidebarItem } from "./sidebar";
import "./accordion.scss";
import { Link } from "react-router-dom";

const Accordion = ({ item, items, theme, icons }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("accordion__content");
  const [setRotate, setRotateState] = useState("accordion__arrow");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? "accordion__content"
        : "accordion__content hidden"
    );
    setRotateState(
      setActive === "active" ? "accordion__arrow" : "accordion__arrow rotate"
    );
  };

  const accordionContentTheme = () => {
    switch (theme) {
      case "primary":
        return "accordion__content";
      case "secondary":
        return "accordion__content-secondary";
      case "dark":
        return "accordion__content-dark";
      default:
        return "accordion__content";
    }
  };

  const accordionLinkHoverTheme = () => {
    switch (theme) {
      case "primary":
        return "accordion__link-wrapper";
      case "secondary":
        return "accordion__link-wrapper-secondary";
      case "dark":
        return "accordion__link-wrapper-dark";
      default:
        return "accordion__content";
    }
  };

  const accordionIconTheme = () => {
    switch (theme) {
      case "primary":
        return "#fff";
      case "secondary":
        return "#44bef1";
      case "dark":
        return "#f8b739";
      default:
        return "#fff";
    }
  };

  const accordionButtonTheme = () => {
    switch (theme) {
      case "primary":
        return "accordion";
      case "secondary":
        return "accordion__secondary";
      case "dark":
        return "accordion__dark";
      default:
        return "accordion";
    }
  };

  const arrow = icons.find((item) => item.iconName === "arrow");

  return (
    <div className="accordion__section">
      {item.items && item.items.length ? (
        <>
          <button className={accordionButtonTheme()} onClick={toggleAccordion}>
            {item.icon ? (
              <Icon
                icons={icons}
                iconName={item.icon}
                className="accordion__icon"
                width={20}
                fill={accordionIconTheme()}
              />
            ) : null}
            <p className="accordion__text">{item.label}</p>
            {arrow ? (
              <Icon
                icons={icons}
                iconName={arrow.iconName}
                viewBox={arrow.viewBox}
                width={10}
                fill="#fff"
                className={`${setRotate}`}
                style={{ marginLeft: "auto" }}
              />
            ) : null}
          </button>
        </>
      ) : (
        <Link to={`/${item.itemName}`} className={accordionContentTheme()}>
          <div className={accordionLinkHoverTheme()}>
            {item.icon ? (
              <Icon
                icons={icons}
                iconName={item.icon}
                className="accordion__link-icon"
                width={20}
                fill={accordionIconTheme()}
              />
            ) : null}
            <span className="accordion__link-text">{item.label}</span>
          </div>
        </Link>
      )}
      <div className={`${setHeight}`}>
        {items &&
          items.map((item) => {
            return (
              <SidebarItem
                theme={theme}
                key={`${item.itemName}`}
                item={item}
                items={item.items}
                icons={icons}
              />
            );
          })}
      </div>
    </div>
  );
};

export default withRouter(Accordion);

Accordion.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  items: PropTypes.arrayOf(PropTypes.object),
};
