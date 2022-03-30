import React from "react";

import "./CategoryButton.css";

const CategoryButton = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="category-button">{children}</button>
    </>
  );
};

export default CategoryButton;
