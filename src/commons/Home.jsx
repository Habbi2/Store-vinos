import { useSelector } from "react-redux";
import NavbarP from "./Navbar";
import Card from "./Card";

const GridProduct = () => {
  const productos = useSelector((state) => state.products);
  return (
    <div>
      <NavbarP />
      {productos.resultados ? (
        <div className="grid-productos">
          {productos.resultados.map((value, index) => {
            return <Card key={index} product={value} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GridProduct;
