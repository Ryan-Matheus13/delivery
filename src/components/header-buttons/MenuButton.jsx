import React, { useState } from "react";
import "./HeaderButtons.css";

import MenuDrawer from "../MenuDrawer/MenuDrawer";

const MenuButton = ({ children, hide }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button style={hide} onClick={() => {setOpen(true)}} className="button">{children}</button>
      <MenuDrawer onClose={() => {setOpen(false)}} open={open}></MenuDrawer>
      
    </>
  );
};

export default MenuButton;
