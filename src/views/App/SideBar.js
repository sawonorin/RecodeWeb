import React, { useState } from "react";
import { Menu, Dropdown, Segment, Header, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

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
];

const SideBar = () => {
  const [activeItem, handleItemClick] = useState("dashboard");
  return (
    <Menu
      fluid
      vertical
      pointing
      inverted
      style={{ minHeight: "100vh", borderRadius: 0 }}
      size="large"
    >
      <Menu.Item>
        <Segment textAlign="center" inverted color="purple">
          <Header>HIRE WELL</Header>
        </Segment>
      </Menu.Item>
      <Menu.Item>
        <Header as="h2" textAlign="center">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />
          <span style={{ display: "block", fontSize: 15, color: "white" }}>
            Patrick
          </span>
        </Header>
      </Menu.Item>

      {menuItems.map((item) => (
        <Menu.Item
          as={NavLink}
          to={item.to}
          active={activeItem === item.name}
          name={item.name}
          onClick={(e) => handleItemClick(e.target.name)}
          icon={item.icon}
        />
      ))}
      
      <Dropdown item text="More">
        <Dropdown.Menu>
          <Dropdown.Item icon="edit" text="Edit Profile" />
          <Dropdown.Item icon="globe" text="Choose Language" />
          <Dropdown.Item icon="settings" text="Account Settings" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default SideBar;
