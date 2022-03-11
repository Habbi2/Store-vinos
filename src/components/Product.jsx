import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  let product = {};
  if (products.resultados) product = products.resultados[id];
  const { name, breed, price, description, image } = product;
  return (
    <div>
      <img src={image} alt="" style={{ width: "300px" }} />
      <h1>{name}</h1>
      <h2>{breed}</h2>
      <h3>{description}</h3>
      <h4>{price}</h4>
    </div>
  );
};

export default Product;
