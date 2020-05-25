import React, { useState } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

const NavBar = () => {
  const [activeItem, handleItemClick] = useState("home");

  return (
    <Menu stackable inverted color="purple">
      <Menu.Item>
        <img src="https://react.semantic-ui.com/logo.png" alt="company logo" />
      </Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={(e) => handleItemClick(e.target.name)}
      />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={(e) => handleItemClick(e.target.name)}
      />

      <Menu.Menu position="right">
        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button>Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
