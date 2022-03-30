import React from "react";

import './MenuDrawer.css'

import {
  Drawer,
  Box
} from "@mui/material";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCart, MdExitToApp } from "react-icons/md"; 
import { FiPackage } from "react-icons/fi";
import ItemMenu from "./ItemMenu";
import PerfilImage from "./PerfilImage";
import UserName from "./UserName";

const MenuDrawer = ({ onClose, open }) => {

  return (
    <>
      <Drawer onClose={onClose} open={open}>
        <Box className="perfil-container">
          <PerfilImage></PerfilImage>
          <UserName></UserName>
        </Box>
        <Box
          className='menu-container'
        >
          <ItemMenu value='Meus Dados'><AiOutlineUser/></ItemMenu>
          <ItemMenu value='Carrinho'><MdOutlineShoppingCart/></ItemMenu>
          <ItemMenu value='Meus Pedidos'><FiPackage/></ItemMenu>
          <ItemMenu value='Sair'><MdExitToApp/></ItemMenu>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
