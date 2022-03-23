import React from "react";

import "./Header.css";

import { HiMenuAlt2, HiSearch } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import MenuButton from "../components/MenuButton";
import SearchButton from "../components/SearchButton";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header-buttons">
          <MenuButton>
            <HiMenuAlt2 />
          </MenuButton>
          <SearchButton>
            <HiSearch />
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
