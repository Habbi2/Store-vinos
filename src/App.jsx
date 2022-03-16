import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navbar"
import Grid from "./components/Grid";
import Card from "./commons/Card";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { setProducts, setTintos, setBlancos, setRosados } from "./state/products";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/products/all").then(({ data }) => {
      dispatch(setProducts(data));
    });

    axios.get("/api/products/list/tinto").then(({ data }) => {
      dispatch(setTintos(data));
    });

    axios.get("/api/products/list/blanco").then(({ data }) => {
      dispatch(setBlancos(data));
    });
    
    axios.get("/api/products/list/rosado").then(({ data }) => {
      dispatch(setRosados(data));
    });

  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Grid />} />
        <Route path="/products/:name" element={<div>hola</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
