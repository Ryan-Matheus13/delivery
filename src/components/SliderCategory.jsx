import React from "react";

import "./SliderCategory.css";

import CategoryButton from "./CategoryButton";

const SliderCategory = () => {
  return (
    <>
      <div className="slider-container">
        <CategoryButton>Promoções</CategoryButton>
        <CategoryButton>Burguer</CategoryButton>
        <CategoryButton>Vegetarianos</CategoryButton>
        <CategoryButton>Porções</CategoryButton>
        <CategoryButton>Sobremesas</CategoryButton>
        <CategoryButton>Bebidas</CategoryButton>
      </div>
    </>
  );
};

export default SliderCategory;
