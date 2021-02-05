import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Icon from "./icon";
import { SidebarItem } from "./sidebar";
import "./accordion.scss";
import { Link } from "react-router-dom";

const Accordion = ({ item, items, theme = "primary" }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("accortidon__content");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const toggleAccordion = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active"
        ? "accordion__content"
        : "accordion__content hidden"
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <div className="accordion__section">
      {item.items && item.items.length ? (
        <>
          <button className="accordion" onClick={toggleAccordion}>
            {item.icon ? (
              <Icon
                iconName={item.icon}
                className="accordion__icon"
                width={20}
                fill="#fff"
              />
            ) : null}
            <p className="accordion__text">{item.label}</p>
            <Icon
              iconName="arrow"
              width={10}
              fill="#fff"
              className={`${setRotate}`}
              style={{ marginLeft: "auto" }}
            />
          </button>
        </>
      ) : (
        <Link to={`/${item.itemName}`} className="accordion__content">
          <div className="accordion__link-wrapper">
            {item.icon ? (
              <Icon
                iconName={item.icon}
                className="accordion__link-icon"
                width={20}
                fill="#fff"
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
                key={`${item.itemName}`}
                item={item}
                items={item.items}
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
