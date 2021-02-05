import React, { useState } from "react";
import MenuItem from "./menuitem";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import "./sidebar.scss";

export const SidebarItem = ({ item, items, ...rest }) => {
  return (
    <>
      <MenuItem items={items} item={item} {...rest} />
    </>
  );
};

const Sidebar = ({
  items,
  sidebarLogo,
  sidebarTitle = "Business",
  theme = "primary",
}) => {
  const [setActive, setActiveState] = useState("");
  const [collapse, setCollapse] = useState("sidebar");
  const [secondaryCollapse, setSecondaryCollapse] = useState(
    "sidebar__secondary"
  );
  const [darkCollapse, setDarkCollapse] = useState("sidebar__dark");

  const [buttonCollapse, setButtonCollapse] = useState(
    "sidebar__collapse-wrapper"
  );

  const collapseHandler = () => {
    setActiveState(setActive === "" ? "active" : "");
    if (theme === "primary") {
      setCollapse(setActive === "active" ? "sidebar" : "sidebar collapsed");
    } else if (theme === "secondary") {
      setSecondaryCollapse(
        setActive === "active"
          ? "sidebar__secondary"
          : "sidebar__secondary collapsed"
      );
    } else if (theme === "dark") {
      setDarkCollapse(
        setActive === "active" ? "sidebar__dark" : "sidebar__dark collapsed"
      );
    }
    setButtonCollapse(
      setActive === "active"
        ? "sidebar__collapse-wrapper"
        : "sidebar__collapse-wrapper button__collapsed"
    );
  };

  const sidebarTheme = () => {
    switch (theme) {
      case "primary":
        return collapse;
      case "secondary":
        return secondaryCollapse;
      case "dark":
        return darkCollapse;
      default:
        return collapse;
    }
  };

  return (
    <div className={sidebarTheme()}>
      <div className={`${buttonCollapse}`}>
        <button className="sidebar__collapse" onClick={collapseHandler}>
          <span className="sidebar__hamburger">
            <hr className="line1" />
            <hr className="line2" />
            <hr className="line3" />
          </span>
        </button>
      </div>
      <div className="sidebar__title-wrapper">
        {sidebarLogo ? (
          <Link className="sidebar__link" to="/">
            <img src={sidebarLogo} alt="logo" className="sidebar__logo" />
          </Link>
        ) : (
          <Link className="sidebar__link" to="/">
            <h2 className="sidebar__title">{sidebarTitle}</h2>
          </Link>
        )}
      </div>
      <div className="list">
        {items.map((sidebarItem, index) => (
          <SidebarItem
            key={`${sidebarItem.itemName}${index}`}
            item={sidebarItem}
            items={sidebarItem.items}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  sidebarLogo: PropTypes.string,
  sidebarTitle: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "dark"]),
};

SidebarItem.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  items: PropTypes.arrayOf(PropTypes.object),
};
