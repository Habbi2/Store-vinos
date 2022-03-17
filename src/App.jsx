import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navbar"
import Grid from "./components/Grid";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import InfoDetails from "./commons/InfoDetails";
import { setProducts, setTintos, setBlancos, setRosados } from "./state/products";


function App() {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.products);
  const search = useSelector((state) => state.search)

  const [tintos , setTintos] = useState([])
  const [blancos , setBlancos] = useState([])
  const [rosados , setRosados] = useState([])

  useEffect(() => {
    
    axios.get("/api/products/all").then(({ data }) => {
      const sortProducts = data.sort(()=> Math.random() - 0.5);
      dispatch(setProducts(sortProducts));
    });

    axios.get("/api/products/list/tinto").then(({ data }) => {
      setTintos(data);
    });

    axios.get("/api/products/list/blanco").then(({ data }) => {
      setBlancos(data);
    });
    
    axios.get("/api/products/list/rosado").then(({ data }) => {
      setRosados(data);
    });

  }, [dispatch]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Grid vinos={productos}/>} />

        <Route path={`/categories/tintos`} element={<Grid vinos={tintos}/>} />
        <Route path={`/categories/blancos`} element={<Grid vinos={blancos}/>} />
        <Route path={`/categories/rosados`} element={<Grid vinos={rosados}/>} />


        <Route path="/vinos/:keyword" element={<Grid vinos={search}/>} />
        <Route path="/products/:name/:id" element={<InfoDetails/>}/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
