import Card from "../commons/Card";
<<<<<<< HEAD
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
=======
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
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
          </h2>
        </div>
      ) : (
        <></>
      )}
      <div className="row grid">
<<<<<<< HEAD
        {propiedades.length > 0 ? (
          propiedades.map((value, index) => {
=======
        {vinos.length > 0 ? (
          vinos.map((value, index) => {
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
            return <Card key={index} product={value} />;
          })
        ) : (
          <p>cargando...</p>
        )}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Grid;
=======
export default Grid;
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
