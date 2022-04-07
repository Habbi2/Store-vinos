import { useNavigate } from "react-router";
/* import {Link} from "react-router-dom"
import InfoDetails from "./InfoDetails"; */

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.name}/${product.id}`);
  };

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

    </div>
  </div>
</div>

  );
};

export default Card;



