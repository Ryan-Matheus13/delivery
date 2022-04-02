import React from "react";

import './Product.css'

import Details from "../components/typography/Details";
import ItemImage from "../components/item/ItemImage";
import ProductTitle from "../components/typography/ProductTitle";
import QuantButton from "../components/buttons/QuantButton";
import Observations from "../components/inputs/Observations";
import AddCartButton from "../components/buttons/AddCartButton";
import BackButton from "../components/buttons/BackButton";

const Product = () => {
  const imageCss = {
    height: "30rem",
    width: "30rem",
    borderRadius: "100%",
    marginBottom: "-10rem"
  };

  return (
    <>
      <div className="page-container">
        <div className="top-content-container">
            <BackButton></BackButton>
            <ProductTitle>Cheese burguer</ProductTitle>
        </div>
        <ItemImage style={imageCss}></ItemImage>
        <div className="content-container">
            <Details description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam enim laboriosam culpa eligendi.'}></Details>
            <div className="price-container">
                <QuantButton></QuantButton>
                <span className="price">R$25,50</span>
            </div>
            <Observations></Observations>
            <AddCartButton></AddCartButton>
        </div>
      </div>
    </>
  );
};

export default Product;
