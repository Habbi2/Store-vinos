import { useState } from "react";

const CartItem = ({ product }) => {
  const [show, setShow] = useState({ collapsed: false });
  const { name, price, quantity, image } = product;
  const [count, setCount] = useState(quantity);
  const handleChange = () => {
    setShow({ collapsed: !show.collapsed });
  };
  const handleCount = (string) => {
    if (string === "add") setCount(count + 1);
    if (string === "substract") setCount(count - 1);
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
          <p>{" $ " + price}</p>
        </div>
      </div>
      {!show.collapsed ? (
        <button onClick={handleChange} className="btn btn-rounded btn-buy">EDITAR</button>
      ) : (
        <div className="edit">
          <div className="edit-info">
            <h3 className="text-white" onClick={() => handleCount("substract")}>-</h3>
            <h3 className="text-white">{count}</h3>
            <h3 className="text-white" onClick={() => handleCount("add")}>+</h3>
          </div>
          <div className="edit-buttons">
            <button className="btn btn-rounded btn-buy">ATRAS</button>
            <button className="btn btn-rounded btn-buy">CAMBIAR</button>
            <button className="btn btn-rounded btn-buy">ELIMINAR</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
