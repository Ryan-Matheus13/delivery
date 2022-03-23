import React from "react";
import "./App.css";

import Header from "./sections/Header";
import SliderCategory from "./components/SliderCategory";
import Warning from "./components/Warning";
import Banner from "./components/Banner";
import Categorys from "./sections/Categorys";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Warning></Warning>
      <Banner></Banner>
      <SliderCategory></SliderCategory>
      <Categorys></Categorys>
    </div>
  );
}

export default App;
