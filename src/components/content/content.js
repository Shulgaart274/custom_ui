import React from "react";
import Sidebar from "../sidebar/sidebar";
import Icon from "../sidebar/icon";
import "./content.scss";
import TextInput from "../input/input";

const Content = () => {
  return (
    <div className="wrapper">
      <Sidebar items={items} theme="primary" icons={icons} />
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

const icons = [
  {
    iconName: "arrow",
    svg: (p) => (
      <g>
        <path
          {...p}
          d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
		    	c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
		    	c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
		    	c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
        />
      </g>
    ),
    viewBox: "0 0 492.004 492.004",
  },

  {
    iconName: "home",
    svg: (p) => (
      <g>
        <path
          {...p}
          d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041
          c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629
          c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939
          z"
        />
        <path
          {...p}
          d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816
          c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245
          c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136
          c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998
          L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125
          c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z"
        />
      </g>
    ),
    viewBox: "0 0 460.298 460.297",
  },
  {
    iconName: "billing",
    svg: (p) => (
      <g>
        <g>
          <g>
            <polygon points="320,0 320,128 448,128" />
          </g>
        </g>
        <g>
          <path
            {...p}
            d="M320,160c-17.632,0-32-14.368-32-32V0H96C78.368,0,64,14.368,64,32v448c0,17.664,14.368,32,32,32h320
            c17.664,0,32-14.336,32-32V160H320z M176,97.984V80c0-8.832,7.168-16,16-16c8.832,0,16,7.168,16,16v18.016
            c10.016,2.272,19.36,6.496,27.072,12.768c6.88,5.568,7.904,15.648,2.304,22.496c-5.6,6.88-15.68,7.872-22.496,2.304
            C208.832,130.688,200.704,128,192,128c-17.344,0-32,10.976-32,24s14.656,24,32,24c35.296,0,64,25.12,64,56
            c0,26.016-20.48,47.744-48,54.016V304c0,8.832-7.168,16-16,16c-8.832,0-16-7.168-16-16v-18.016
            c-10.016-2.272-19.36-6.496-27.072-12.768c-6.88-5.6-7.904-15.68-2.304-22.528c5.6-6.912,15.648-7.872,22.496-2.304
            C175.168,253.312,183.296,256,192,256c17.344,0,32-10.976,32-24s-14.656-24-32-24c-35.296,0-64-25.12-64-56
            C128,125.984,148.48,104.256,176,97.984z M368,448H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h224
            c8.832,0,16,7.168,16,16C384,440.832,376.832,448,368,448z M368,384H144c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h224
            c8.832,0,16,7.168,16,16C384,376.832,376.832,384,368,384z M368,320h-64c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64
            c8.832,0,16,7.168,16,16C384,312.832,376.832,320,368,320z M368,256h-64c-8.832,0-16-7.168-16-16c0-8.832,7.168-16,16-16h64
            c8.832,0,16,7.136,16,16C384,248.832,376.832,256,368,256z"
          />
        </g>
      </g>
    ),
    viewBox: "0 0 512 512",
  },
  {
    iconName: "dekstop-monitor",
    svg: (p) => (
      <path
        {...p}
        d="M534.75,49.965c-8.945-8.945-19.694-13.422-32.261-13.422H45.681c-12.562,0-23.313,4.477-32.264,13.422
              C4.471,58.913,0,69.663,0,82.226v310.633c0,12.566,4.471,23.315,13.417,32.265c8.951,8.945,19.702,13.414,32.264,13.414h155.318
              c0,7.231-1.524,14.661-4.57,22.269c-3.044,7.614-6.09,14.273-9.136,19.981c-3.042,5.715-4.565,9.897-4.565,12.56
              c0,4.948,1.807,9.24,5.424,12.847c3.615,3.621,7.898,5.435,12.847,5.435h146.179c4.949,0,9.233-1.813,12.848-5.435
              c3.62-3.606,5.427-7.898,5.427-12.847c0-2.468-1.526-6.611-4.571-12.415c-3.046-5.801-6.092-12.566-9.134-20.267
              c-3.046-7.71-4.569-15.085-4.569-22.128h155.318c12.56,0,23.309-4.469,32.254-13.414c8.949-8.949,13.422-19.698,13.422-32.265
              V82.226C548.176,69.663,543.699,58.913,534.75,49.965z M511.627,319.768c0,2.475-0.903,4.613-2.711,6.424
              c-1.81,1.804-3.952,2.707-6.427,2.707H45.681c-2.473,0-4.615-0.903-6.423-2.707c-1.807-1.817-2.712-3.949-2.712-6.424V82.226
              c0-2.475,0.902-4.615,2.712-6.423c1.809-1.805,3.951-2.712,6.423-2.712h456.815c2.471,0,4.617,0.904,6.42,2.712
              c1.808,1.809,2.711,3.949,2.711,6.423V319.768L511.627,319.768z"
      />
    ),
    viewBox: "0 0 548 548",
  },
  {
    iconName: "notifications",
    svg: (p) => (
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-444.000000, -4100.000000)">
          <g id="Social" transform="translate(100.000000, 4044.000000)">
            <g
              id="-Round-/-Social-/-notifications"
              transform="translate(340.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  {...p}
                  d="M12,22 C13.1,22 14,21.1 14,20 L10,20 C10,21.1 10.89,22 12,22 Z M18,16 L18,11 C18,7.93 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C7.63,5.36 6,7.92 6,11 L6,16 L4.71,17.29 C4.08,17.92 4.52,19 5.41,19 L18.58,19 C19.47,19 19.92,17.92 19.29,17.29 L18,16 Z"
                  id="🔹-Icon-Color"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    ),
    viewBox: "0 0 24 24",
  },
  {
    iconName: "settings",
    svg: (p) => (
      <g>
        <g id="info" />
        <g id="icons">
          <path
            {...p}
            d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"
            id="settings"
          />
        </g>
      </g>
    ),
    viewBox: "0 0 24 24",
  },
];
