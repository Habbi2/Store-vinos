import { useSelector } from "react-redux";
import NavbarP from "./Navbar";
import Card from "./Card";

const GridProduct = () => {
  const productos = useSelector((state) => state.products);
  
  return (
    <div>
      <NavbarP />
      <div className="grid-productos">
        {productos ? productos.map((value, index) => {
          return <Card key={index} product={value} />;
        }) : <p>"cargando..."</p>}
      </div>
      ) : (<></>)
    </div>
  );
};

export default GridProduct;
