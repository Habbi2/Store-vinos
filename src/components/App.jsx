import Home from "../commons/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";
import productos from "../assets/productos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/products";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(productos));
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
