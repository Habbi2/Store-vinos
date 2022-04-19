import { useNavigate } from "react-router";
<<<<<<< HEAD
/* import {Link} from "react-router-dom"
import InfoDetails from "./InfoDetails"; */
=======
import axios from "axios";
import { setAddCart } from "../state/cart";
import { setCart } from "../state/cart";
import { useDispatch, useSelector } from "react-redux";

>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/products/${product.name}/${product.id}`);
  };

<<<<<<< HEAD
return (
<div className="col-sm">
<div className="card shadow" style={{ width: "25rem" }} onClick={handleClick}>
    <img src={product.image} className="card-img-top hover" style={{ width: "25rem", height: "18rem"}} alt="propiedad-card" />
    <div className="card-body">
      <h3 className="card-title"><strong>{product.name}</strong></h3>
      <h3 className="card-subtitle mb-2 text-muted">{product.location}</h3>
      <p className="card-text">
        <strong>USD{product.price}.000</strong>
      </p>

      <div style={{textAlign: 'center'}}>
      <button type="button" className="btn btn-dark" >Reservar visita</button>
      </div>
=======
  const handleAddCart = () => {
    
    dispatch(setAddCart({ id: product.id }));
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd

    axios.get("/api/users/me").then(({ data }) => {
      dispatch(setCart(data.products));
    });
  };

  return (
    <div className="col-sm">
      <div className="card shadow" style={{ width: "25rem" }}>
        <img
          src={product.image}
          className="card-img-top hover"
          alt="vino-card"
          onClick={handleClick}
        />
        <div className="card-body">
          <h3 className="card-title" onClick={handleClick}>
            <strong>{product.name}</strong>
          </h3>
          <h3 className="card-subtitle mb-2 text-muted" onClick={handleClick}>
            {product.cellar}
          </h3>
          <p className="card-text" onClick={handleClick}>
            <strong>${product.price}.00</strong>
          </p>

          <div style={{ textAlign: "center" }}>
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleAddCart}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
