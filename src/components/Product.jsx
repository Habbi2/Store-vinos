import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const productos = useSelector((state) => state.products);
/*   let product = {};
  if (products.resultados) product = products.resultados[id]; */
  return (
    <div>
      <img src={productos.image} alt="" style={{ width: "300px" }} />
      <h1>{productos.name}</h1>
      <h2>{productos.cellar}</h2>
      <h3>{productos.description}</h3>
      <h4>{productos.price}</h4>
    </div>
  );
};

export default Product;
