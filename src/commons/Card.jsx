import { useNavigate } from "react-router";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { name, breed, price, description, image, id } = product;
  const handleClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <img src={image} alt="" style={{ width: "100px" }} />
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h3>{description}</h3>
      <h4>{price}</h4>
    </div>
  );
};

export default Card;
