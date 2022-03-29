import React from "react";

import './MenuDrawer.css'

import {
  Drawer,
  Box
} from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import ItemMenu from "./ItemMenu";

const MenuDrawer = ({ onClose, open }) => {

  return (
    <>
      <Drawer onClose={onClose} open={open}>
        <Box
          className='menu-container'
        >
          <ItemMenu value='Meus Dados'><AiOutlineUser/></ItemMenu>
          <ItemMenu value='Carrinho'><MdOutlineShoppingCart/></ItemMenu>
          <ItemMenu value='Meus Pedidos'><FiPackage/></ItemMenu>
          <ItemMenu value='Sair'><IoExitOutline/></ItemMenu>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
