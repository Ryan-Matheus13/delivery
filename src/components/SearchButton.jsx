import React from "react";

import "./HeaderButtons.css";

const SearchButton = ({ children }) => {
  return (
    <>
      <button className="button">{children}</button>
    </>
  );
};

export default SearchButton;
