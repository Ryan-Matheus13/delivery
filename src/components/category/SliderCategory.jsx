import React, { useState } from "react";

import "./SliderCategory.css";

import CategoryButton from "./CategoryButton";

const SliderCategory = ({categorys}) => {

  const[categoryLink, setCategoryLink] = useState('')

  return (
    <>
      <div className="slider-container">
        {categorys.map((category) => (
          <CategoryButton onClick={() => setCategoryLink(category.title)}><a href={`#${categoryLink}`}>{category.title}</a></CategoryButton>
        ))}
      </div>
    </>
  );
};

export default SliderCategory;
