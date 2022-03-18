import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Search from "../commons/Search";
import Cart from "../commons/Cart";
import logoCopa from "../img/logoCopa.png";
import { setCart } from "../state/cart";
import { setLogoutRequest, setUserMeRequest } from "../state/user";
import axios from "axios";

const Footer = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState({ collapsed: false });
  const productsLength = useSelector((state) => state.cart).length;

  useEffect(() => {
    axios.get("/api/cart/get").then(({ data }) => dispatch(setCart(data)));
  }, [dispatch]);

  const handleChange = () => {
    setCollapsed({ collapsed: !collapsed.collapsed });
  };

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);

  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Sandwich */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Imagen y Titulo */}
        <Link to="/" className="navbar-brand fs-2 ms-5">
          <img
            src={logoCopa}
            alt="Logo"
            className="d-inline-block aling-top"
            style={{ width: 50 }}
          />
          Alguien dijo Vino?
        </Link>

        {/*Link de Carrito*/}
        {user.id ? (
          <div className="d-flex order-lg-3">
            <li className="nav-item d-flex mx-5 my-2">
              <div onClick={handleChange}>
                <i className="bi bi-cart4 positio-relative cart">
                  <span
                    className="position-absolute

                 translate-middle badge rounded-pill fs-4"
                  >
                    {productsLength ? productsLength : 0}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
              </div>
              {collapsed.collapsed ? <Cart></Cart> : <></>}
            </li>
          </div>
        ) : (
          <></>
        )}

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto text-center mb-2 mb-lg-0 ul-menu">
            {/*Link de Productos*/}
            <li className="nav-item">
              <Link to="/products" aria-current="page" href="#">
                Productos
              </Link>
            </li>

            {/* Input Buscar */}
            <Search />

            {/* Dropdown Categorias */}
            <li className="nav-item dropdown">
              <a
                className="dropdown-toggle"
                href="index.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdown"
              >
                <hr className="dropdown-divider"></hr>
                <Link to="/categories/Tinto" className="dropdown-item">
                  Tinto
                </Link>
                <hr className="dropdown-divider"></hr>
                <Link to="/categories/Blanco" className="dropdown-item">
                  Blanco
                </Link>
                <hr className="dropdown-divider"></hr>
                <Link to="/categories/Rosado" className="dropdown-item">
                  Rosado
                </Link>
                <hr className="dropdown-divider"></hr>
              </ul>
            </li>

            {/* Login */}
            <li className="nav-item">
              <div className="login">
                {user.id ? (
                  <div className="form">
                    <Link to="/">{user.name}</Link>
                    <Link to="/" onClick={logoutButton}>
                      Salir
                    </Link>
                  </div>
                ) : (
                  <div className="form">
                    <Link to="/login">Ingresar</Link>
                    <Link to="/register">Registrarse</Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
