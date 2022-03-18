import { useState } from "react";
import axios from "axios";
import { setCart, setDeleteCart } from "../state/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const [show, setShow] = useState({ collapsed: false });
  const { name, price, quantity, image, id } = product;
  const [count, setCount] = useState(quantity);
  const dispatch = useDispatch();

  const handleChange = () => {
    setShow({ collapsed: !show.collapsed });
  };
  const handleCount = (string) => {
    if (string === "add") setCount(count + 1);
    if (string === "substract") setCount(count - 1);
  };

  const handleDelete = () => {
    dispatch(setDeleteCart({id : id}))
    axios.get("/api/cart/get").then(({data}) => dispatch(setCart(data)));
  };
  return (
    <div className="cart-item">
      <div className="media">
        <img
          width={100}
          height={100}
          className="align-self-center mr-3"
          src={image}
          alt="Generic placeholder"
        />
        <div>
          <p>{name}</p>
          <p>{quantity}</p>
          <p>{price + " $ "}</p>
        </div>
      </div>
      {!show.collapsed ? (
        <button onClick={handleChange}>Editar</button>
      ) : (
        <div className="edit">
          <div className="edit-info">
            <h3 onClick={() => handleCount("substract")}>-</h3>
            <h3>{count}</h3>
            <h3 onClick={() => handleCount("add")}>+</h3>
          </div>
          <div className="edit-buttons">
            <button>back</button>
            <button>change</button>
            <button onClick={handleDelete}>delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
