import React, { useState } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { authHooks } from "../../hooks";

const NavBar = () => {
  const [activeItem, handleItemClick] = useState("home");
  const { logOut } = authHooks.useLogOut();

  return (
    <Menu
      stackable
      inverted
      color="purple"
      style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      size="large"
    >
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
        <Dropdown item text="Account Settings">
          <Dropdown.Menu>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Others</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button onClick={() => logOut()}>Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
