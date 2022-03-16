import { useSelector } from "react-redux";
import Card from "../commons/Card";
import "../assets/style/grid.scss"

const Grid = ({vinos}) => {

  return (
    <div className="container">
      <div className="row grid">
        {vinos ? vinos.map((value, index) => {
          return <Card key={index} product={value} />;
        }) : <p>cargando...</p>}
      </div>
    </div>
  );
};

export default Grid;

