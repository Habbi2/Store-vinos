import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navbar"
import Grid from "./components/Grid";
import Product from "./components/Product";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { setProducts } from "./state/products";
import {products} from "./dbProducts";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Grid />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
