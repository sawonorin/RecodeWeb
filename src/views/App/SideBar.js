import React, { useState } from "react";
import { Menu, Dropdown, Segment, Header, Image } from "semantic-ui-react";

const SideBar = () => {
  const [activeItem, handleItemClick] = useState("Dashboard");

  return (
    <Menu fluid vertical pointing inverted style={{ minHeight: "100vh" }}>
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
      <Menu.Item
        name="Dashboard"
        link="/"
        active={activeItem === "bio"}
        onClick={(e) => handleItemClick(e.target.name)}
      />
      <Menu.Item
        name="companies"
        active={activeItem === "companies"}
        onClick={(e) => handleItemClick(e.target.name)}
      />
      <Menu.Item
        name="pics"
        active={activeItem === "pics"}
        onClick={(e) => handleItemClick(e.target.name)}
      />
      <Menu.Item
        name="links"
        active={activeItem === "links"}
        onClick={(e) => handleItemClick(e.target.name)}
      />

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
