import React, { useState, useEffect } from "react";

import Category from "../components/category/Category";

const Categorys = () => {
  const [itens, setItens] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/produtos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItens(data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Category itens={itens}></Category>
    </>
  );
};

export default Categorys;
