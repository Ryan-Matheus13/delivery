import React from "react";

import "./Item.css";
import ItemImage from "./ItemImage";

const Item = ({ category }) => {
  const arrayItem = [];

  Object.keys(category).forEach((item) => {
    arrayItem.push(category[item]);
  });

  return (
    <>
      {arrayItem.slice(1, arrayItem.length).map((item) => (
        <div className="item-container">
          <ItemImage></ItemImage>
          <div className="item-content-container">
            <div className="item-title">{item.title}</div>
            <div className="item-description">{item.description}</div>
            <div className="item-price">
              <span>R${item.price.toFixed(2).replace(".", ",")}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
