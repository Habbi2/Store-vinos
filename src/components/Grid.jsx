import { useSelector } from "react-redux";
import NavbarP from "./Navbar";
import Card from "../commons/Card";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "../commons/Cart";

const Grid = () => {
  const productos = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.users);

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/cart/add", { users: user, id: 1 })
      .then(() => {});
    axios
      .post("http://localhost:3001/api/cart/get", user)
      .then((products) => setProducts(products.data));
  }, [user]);

  return (
    <div>
      <NavbarP />
      <Cart products={products}/>
      <div className="grid-productos">
        {productos ? (
          productos.map((value, index) => {
            return <Card key={index} product={value} />;
          })
        ) : (
          <p>"cargando..."</p>
        )}
      </div>
    </div>
  );
};

export default Grid;
