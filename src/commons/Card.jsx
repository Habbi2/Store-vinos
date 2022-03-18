import { useNavigate } from "react-router";
import axios from "axios";
import { setAddCart } from "../state/cart";
import { setCart } from "../state/cart";
import { useDispatch, useSelector } from "react-redux";


const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/products/${product.name}/${product.id}`);
  };

  const handleAddCart = () => {
    
    dispatch(setAddCart({ id: product.id }));

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
