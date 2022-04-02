import React, { useState } from "react";

import "./HeaderButtons.css";
import SearchModal from "./SearchModal";

const SearchButton = ({ children, onClick, style, hide }) => {
  
  return (
    <>
      <button onClick={onClick} style={hide} className="button">{children}</button>
      <SearchModal style={style}></SearchModal>
    </>
  );
};

export default SearchButton;
