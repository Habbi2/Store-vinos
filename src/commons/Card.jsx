import { useNavigate } from "react-router";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div onClick={handleClick}>
      <img src={product.image} alt="vino_imagen" style={{ width: "200px" }} />
      <h1>{product.name}</h1>
      <h2>{product.cellar}</h2>
      <h3>{product.description}</h3>
      <h4>{product.price}</h4>
    </div>
  );
};

export default Card;
