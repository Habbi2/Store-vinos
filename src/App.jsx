import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";


import Grid from "./components/Grid";
import Product from "./components/Product";
import Login from "./components/Login";
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
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
