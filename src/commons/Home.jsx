import { useSelector } from "react-redux";
import Card from "./Card";

const GridProduct = () => {
  const productos = useSelector((state) => state.products);
  return productos.resultados ? (
    <div className="grid-productos">
      {productos.resultados.map((value, index) => {
        return <Card key={index} product={value}/>;
      })}
    </div>
  ) : (
    <></>
  );
};

export default GridProduct;
