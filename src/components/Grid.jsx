import { useSelector } from "react-redux";
import Card from "../commons/Card";
import { useLocation, useParams } from "react-router";
import "../assets/style/grid.scss";

const Grid = ({ vinos }) => {
  const path = useLocation().pathname
  return (
    <div className="container">
      {vinos.length > 0 ? (
        <div>
          <h2 className="tituloCategorias">
            {path === "/products" ? "Nuestra carta de productos para vos" : `Nuestra selección de ${vinos[1].breed}`}
          </h2>
        </div>
      ) : (
        <></>
      )}
      <div className="row grid">
        {vinos.length > 0 ? (
          vinos.map((value, index) => {
            return <Card key={index} product={value} />;
          })
        ) : (
          <p>cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Grid;
