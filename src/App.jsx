import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./App.css";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import FinalizeOrder from "./pages/FinalizeOrder";
import SumaryOrder from "./pages/SumaryOrder";
import TrackOrder from "./pages/TrackOrder";
import UserData from "./pages/UserData";
import UserOrders from "./pages/UserOrders";


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/' >home</Link>
        </li>
        <li>
          <Link to='/produto' >produto</Link>
        </li>
        <li>
          <Link to='/cart' >cart</Link>
        </li>
        <li>
          <Link to='/finalizar-pedido' >finalizar</Link>
        </li>
        <li>
          <Link to='/sumario-pedido' >sumario</Link>
        </li>
        <li>
          <Link to='/acompanhar-pedido' >acompanhar</Link>
        </li>
        <li>
          <Link to='/meus-dados' >meus dados</Link>
        </li>
        <li>
          <Link to='/meus-pedidos' >pedidos</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home/>} >
        </Route>
        <Route path="/produto" element={<Product/>} >
        </Route>
        <Route path="/cart" element={<Cart/>} >
        </Route>
        <Route path="/finalizar-pedido" element={<FinalizeOrder/>} >
        </Route>
        <Route path="/sumario-pedido" element={<SumaryOrder/>} >
        </Route>
        <Route path="/acompanhar-pedido" element={<TrackOrder/>} >
        </Route>
        <Route path="/meus-dados" element={<UserData/>} >
        </Route>
        <Route path="/meus-pedidos" element={<UserOrders/>} >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
