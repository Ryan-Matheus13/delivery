import React from "react";

import "./HeaderButtons.css";

const MenuButton = ({ children }) => {

  return (
    <>
      <button className="button">{children}</button>
    </>
  );
};

export default MenuButton;
