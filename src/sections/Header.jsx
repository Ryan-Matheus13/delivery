import React, { useState } from "react";

import "./Header.css";

import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import MenuButton from "../components/header-buttons/MenuButton";
import SearchButton from "../components/header-buttons/SearchButton";
import Logo from "../components/logo/Logo";

const Header = () => {
  const [style, setStyle] = useState()
  const [hide, setHide] = useState({})

  const handleSearch = () => {
    setStyle({display: 'flex'})
    setHide({visibility: 'hidden'})
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no'
  }
  return (
    <>
      <div className="container">
        <div className="header-buttons">
          <MenuButton hide={hide} style={style}>
            <HiMenuAlt2 />
          </MenuButton>
          <SearchButton hide={hide} style={style} onClick={handleSearch}>
            <FiSearch />
          </SearchButton>
        </div>
        <div className="header">
          <Logo />
          <div className="description">
            <h1>Cheddar House</h1>
            <h3>
              <MdLocationPin />
              Av. Joelson Silva, 5512
            </h3>
            <div className="status-container">
              <span>Aberto até ás 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
