import React, { useState } from "react";
import DrawerMenu from "./DrawerMenu";

import "./HeaderButtons.css";

const MenuButton = ({ children }) => {
  const[open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="button">{children}</button>
      <DrawerMenu open={open}></DrawerMenu>
    </>
  );
};

export default MenuButton;
