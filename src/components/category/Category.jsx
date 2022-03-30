import React from "react";

import "./Category.css";

import Item from "../item/Item";
import SliderCategory from "./SliderCategory";

const Category = ({ itens }) => {
  const categorys = [];
  const arrayItem = [];

  for (let c = 0; c < itens.length; c++) {
    categorys.push(itens[c]);
  }

  categorys.map((category) =>
    Object.keys(category).forEach((item) => {
      arrayItem.push(category[item]);
    })
  );

  return (
    <>
      <SliderCategory categorys={categorys}></SliderCategory>
      {categorys.map((category) => (
        <div id={category.title} className="category-container">
          <h1>{category.title}</h1>
          <Item category={category} />
        </div>
      ))}
    </>
  );
};

export default Category;
