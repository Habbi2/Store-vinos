import Card from "../commons/Card";
import { useLocation } from "react-router";
import "../assets/style/grid.scss";

const Grid = ({ propiedades }) => {
  const path = useLocation().pathname
  return (
    <div className="container">
      {propiedades.length > 0 ? (
        <div>
          <h2 className="tituloCategorias">
            {path === "/products" ? "Estas son nuestras opciones" : `Listado de propiedades según su elección de categoría`}
          </h2>
        </div>
      ) : (
        <></>
      )}
      <div className="row grid">
        {propiedades.length > 0 ? (
          propiedades.map((value, index) => {
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