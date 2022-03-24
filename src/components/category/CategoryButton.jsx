import React from "react";

import "./CategoryButton.css";

const CategoryButton = ({ children }) => {
  return (
    <>
      <button className="category-button">{children}</button>
    </>
  );
};

export default CategoryButton;
