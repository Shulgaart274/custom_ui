import React from "react";
import PropTypes from "prop-types";
import Accordion from "./accordion";

const MenuItem = ({ item, items, icons, theme }) => {
  return (
    <div className="menu-item">
      <Accordion
        key={item.itemName}
        theme={theme}
        item={item}
        items={items}
        icons={icons}
      />
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
  }),
  items: PropTypes.arrayOf(PropTypes.object),
};
