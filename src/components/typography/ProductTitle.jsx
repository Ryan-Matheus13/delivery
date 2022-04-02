import React from "react";

import './ProductTitle.css'

const ProductTitle = ({ children }) => {
  return (
    <>
      <h1 className="product-title">{children}</h1>
    </>
  );
};

export default ProductTitle;
