import React from "react";
import Sidebar from "../sidebar/sidebar";
import Icon from "../sidebar/icon";
import "./content.scss";
import TextInput from "../input/input";

const Content = () => {
  return (
    <div className="wrapper">
      <Sidebar items={items} sidebarTitle="Spanks" theme="secondary" />
      <div className="content">
        <h1>What the fuck is this?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>

        <h2>Holy shit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>

        <h3>FUCK! FUUUCK!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit ea
          accusamus quisquam veritatis est vero ipsam asperiores? Veniam nemo
          suscipit asperiores aut dolore eius porro cumque a ipsa doloremque!
        </p>

        <div>
          <Icon iconName="dekstop-monitor" width={24} />
          <Icon iconName="home" width={24} />
          <Icon iconName="billing" width={24} />
          <Icon iconName="notifications" width={24} />
          <Icon iconName="settings" width={24} />
          <Icon iconName="arrow" width={16} />
        </div>

        <TextInput
          label="Братик, вводи текст"
          placeholder="Героям слава!"
          defaultValue="Слава Украине!"
          onPressEnter={() => console.log("press enter")}
        />
      </div>
    </div>
  );
};

const items = [
  { itemName: "home", label: "Home", icon: "home" },
  {
    itemName: "billing",
    label: "Billing",
    icon: "billing",
    items: [
      { itemName: "statements", label: "Statements" },
      { itemName: "reports", label: "Reports" },
    ],
  },

  {
    itemName: "settings",
    label: "Settings",
    icon: "settings",
    items: [
      { itemName: "profile", label: "Profile" },
      { itemName: "insurance", label: "Insurance" },

      {
        itemName: "notifications",
        label: "Notifications",
        icon: "notifications",
        items: [
          { itemName: "email", label: "Email" },
          {
            itemName: "desktop",
            label: "Desktop",
            icon: "dekstop-monitor",
            items: [
              { itemName: "schedule", label: "Schedule" },
              { itemName: "frequency", label: "Frequency" },
            ],
          },
          { itemName: "sms", label: "SMS" },
        ],
      },
    ],
  },
];

export default Content;
