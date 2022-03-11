import "../style/style.scss";
import { Link } from "react-router-dom";

const NavbarP = () => {
  return (
    <nav className="navbar">
      <div className="navbarSection">
        <Link to="/">Home</Link>
      </div>
      <div className="navbarSection2">
        <Link to="/productos">Productos</Link>
        <Link to="/categorias">Categorías</Link>

          <input
            className="input is-rounded is-info"
            type="search"
            placeholder="Search..."
          />
          
      </div>
      <div className="navbarSection3">
        <Link to="/login">Login</Link>
      </div>
      <div className="navbarSection3">
        <Link to="/register">Sing up</Link>
      </div>
    </nav>
  );
};

export default NavbarP;
