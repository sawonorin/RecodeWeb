import React, { useState } from "react";
import { Menu, Dropdown, Segment, Header, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Avater from "../../assets/images/avater.png";
import { getUserDetails } from "../../helpers";

const menuItems = [
  {
    to: "/dashboard",
    name: "dashboard",
    icon: "braille",
  },
  {
    to: "/users/all",
    name: "users",
    icon: "user",
  },

  {
    to: "/companies/all",
    name: "companies",
    icon: "industry",
  },
  {
    to: "/departments/all",
    name: "departments",
    icon: "box",
  },
  {
    to: "/job-roles/all",
    name: "job roles",
    icon: "road",
  },
  // {
  //   to: "/interviews/all",
  //   name: "interviews",
  //   icon: "group",
  // },
];

const SideBar = () => {
  const [activeItem, handleItemClick] = useState("dashboard");
  return (
    <Menu
      fluid
      vertical
      pointing
      inverted
      style={{ minHeight: "100%", borderRadius: 0 }}
      size="large"
    >
      <Menu.Item>
        <Segment textAlign="center" inverted color="purple">
          <Header className="pulsate">HIRE WELL</Header>
        </Segment>
      </Menu.Item>
      <Menu.Item>
        <Header as="h2" textAlign="center">
          <Image circular src={Avater} />
          <span style={{ display: "block", fontSize: 15, color: "white" }}>
            {getUserDetails().firstName + " " + getUserDetails().lastName}
          </span>
        </Header>
      </Menu.Item>

      {menuItems.map((item, i) => (
        <Menu.Item
          as={NavLink}
          to={item.to}
          active={activeItem === item.name}
          name={item.name}
          onClick={(e) => handleItemClick(e.target.name)}
          icon={item.icon}
          key={`Menu Item ${i}`}
        />
      ))}

      <Dropdown item text="Roles and Permissions">
        <Dropdown.Menu>
          <Dropdown.Item icon="globe" text="Manage Roles" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default SideBar;
