import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
import InfoDetails from "./commons/InfoDetails";
import NotFound from "./components/NotFound";

import {
  setProducts
} from "./state/products";

function App() {
  const dispatch = useDispatch();

  const productos = useSelector((state) => state.products);
  const search = useSelector((state) => state.search);

 
  const [departamento, setDepartamento] = useState([]);
  const [casa, setCasa] = useState([]);
  const [local, setLocal] = useState([]);
  const [caba, setCaba] = useState([]);
  const [zonaNorte, setZonaNorte] = useState([]);
  const [zonaOeste, setZonaOeste] = useState([]);
  const [zonaSur, setZonaSur] = useState([]);

  useEffect(() => {
    axios.get("/api/products/all").then(({ data }) => {
      const sortProducts = data.sort(() => Math.random() - 0.5);
      dispatch(setProducts(sortProducts));
    });

    axios.get("/api/products/list/departamento").then(({ data }) => {
      setDepartamento(data);
    });

    axios.get("/api/products/list/casa").then(({ data }) => {
      setCasa(data);
    });

    axios.get("/api/products/list/local").then(({ data }) => {
      setLocal(data);
    });

    axios.get("/api/products/list/caba").then(({ data }) => {
      setCaba(data);
    });

    axios.get("/api/products/list/zona_norte").then(({ data }) => {
      setZonaNorte(data);
    });

    axios.get("/api/products/list/zona_oeste").then(({ data }) => {
      setZonaOeste(data);
    });

    axios.get("/api/products/list/zona_sur").then(({ data }) => {
      setZonaSur(data);
    });

  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/:notfound" element={<NotFound />} />
        <Route path="/products/:elemento" element={<NotFound />} />
        <Route path="/products/:elemento" element={<NotFound />} />

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Grid propiedades={productos} />} />

        <Route
          path={`/categories/${departamento[1] ? departamento[1].category : null}`}
          element={<Grid propiedades={departamento} />}
        />
        <Route
          path={`/categories/casa`}
          element={<Grid propiedades={casa} />}
        />
        <Route
          path={`/categories/${local[1] ? local[1].category : null}`}
          element={<Grid propiedades={local} />}
        />

        <Route
          path={`/location/caba`}
          element={<Grid propiedades={caba} />}
        />
        <Route
          path={`/location/zona_norte`}
          element={<Grid propiedades={zonaNorte} />}
        />
        <Route
          path={`/location/zona_oeste`}
          element={<Grid propiedades={zonaOeste} />}
        />
        <Route
          path={`/location/zona_sur`}
          element={<Grid propiedades={zonaSur} />}
        />

        <Route path="/products/:keyword" element={<Grid propiedades={search} />} />
        <Route path="/products/:name/:id" element={<InfoDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
