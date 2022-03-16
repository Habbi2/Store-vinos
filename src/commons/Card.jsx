import { useNavigate } from "react-router";
import {Link} from "react-router-dom"

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
<div class="col-sm">
<div class="card" style={{ width: "25rem" }} onClick={handleClick}>
    <img src={product.image} class="card-img-top" alt="vino-card" />
    <div class="card-body">
      <h3 class="card-title"><strong>{product.name}</strong></h3>
      <h3 class="card-subtitle mb-2 text-muted">{product.cellar}</h3>
      <p class="card-text">
        <strong>${product.price}.00</strong>
      </p>

      <div style={{textAlign: 'center'}}>
      <button type="button" class="btn btn-dark" >Añadir al carrito</button>
      </div>

    </div>
  </div>
</div>

  );
};

export default Card;



