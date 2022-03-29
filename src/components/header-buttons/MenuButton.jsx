import { Drawer } from "@mui/material";
import React from "react";
import { useState } from "react";

import "./HeaderButtons.css";

const MenuButton = ({ children }) => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => {setOpen(true)}} className="button">{children}</button>
      <Drawer onClose={() => {setOpen(false)}} open={open} >
        teste
      </Drawer>
    </>
  );
};

export default MenuButton;
