import { useSelector } from "react-redux";
import Card from "../commons/Card";
import "../assets/style/grid.scss"

const Grid = () => {
  const productos = useSelector((state) => state.products);
  
  return (
    <div>
      <div className="grid">
        {productos ? productos.map((value, index) => {
          return <Card key={index} product={value} />;
        }) : <p>"cargando..."</p>}
      </div>
      ) : (<></>)
    </div>
  );
};

export default Grid;
