import React, { useState, useEffect } from "react";

import Category from "../components/category/Category";

const Categorys = () => {
  const [itens, setItens] = useState([])

  useEffect(() => {
    fetch('http://34.207.93.235:8877/produtos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': 86400
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
