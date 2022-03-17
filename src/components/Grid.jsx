import { useSelector } from "react-redux";
import Card from "../commons/Card";
import { useParams } from "react-router";
import "../assets/style/grid.scss"

const Grid = ({vinos}) => {
  const {products} = useParams();

  return (
    <div className="container">
      <h2 className="tituloCategorias">
        {
          products ? "Nuestra carta de productos para vos." : vinos[1].breed === "Tinto" ? "Nuesta seleccion de tintos." : vinos[1].breed === "Blanco" ? "Nuesta seleccion de blancos." :  vinos[1].breed === "Rosado" ? "Nuesta seleccion de rosados." : null
        }
      </h2>
      <div className="row grid">
        {vinos ? vinos.map((value, index) => {
          return <Card key={index} product={value} />;
        }) : <p>cargando...</p>}
      </div>
    </div>
  );
};

export default Grid;

