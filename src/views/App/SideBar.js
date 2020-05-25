import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const SideBar = () => {
  const [activeItem, handleItemClick] = useState("Dashboard");

  return (
    <Menu fluid vertical pointing inverted style={{ minHeight: "100vh" }}>
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
    </Menu>
  );
};

export default SideBar;
