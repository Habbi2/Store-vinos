import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
import InfoDetails from "./InfoDetails";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.name}/${product.id}`);
  };

  return (
<div className="col-sm">
<div className="card" style={{ width: "25rem" }} onClick={handleClick}>
    <img src={product.image} className="card-img-top" alt="vino-card" />
    <div className="card-body">
      <h3 className="card-title"><strong>{product.name}</strong></h3>
      <h3 className="card-subtitle mb-2 text-muted">{product.cellar}</h3>
      <p className="card-text">
        <strong>${product.price}.00</strong>
      </p>

      <div style={{textAlign: 'center'}}>
      <button type="button" className="btn btn-dark" >Añadir al carrito</button>
      </div>

    </div>
  </div>
</div>

  );
};

export default Card;



