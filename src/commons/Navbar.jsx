import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Bootstrap from "bootstrap";
import "../style/style.scss";
import { Link } from "react-router-dom";

const NavbarP = () => {
  return (
    <nav class="navbar">
      <div class="navbarSection">
        <a href="/">Home</a>
      </div>
      <div class="navbarSection2">
        <a href="/">Productos</a>
        <a href="/">Categorías</a>
        <a href="/">Buscar</a>
      </div>
      <div class="navbarSection3">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavbarP;
