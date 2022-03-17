import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import logoCopa from "../img/logoCopa.png";

import { setLogoutRequest, setUserMeRequest } from "../state/user";

const NavbarP = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);

  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };

  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        {/* Sandwich */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* Imagen y Titulo */}
        <Link to="/" class="navbar-brand fs-2 ms-5">
          <img
            src={logoCopa}
            alt="Logo"
            className="d-inline-block aling-top"
            style={{ width: 50 }}
          />
          Alguien dijo Vino?
        </Link>

        {/*Link de Carrito*/}
        <div class="d-flex order-lg-3">
          <li class="nav-item d-flex mx-5 my-2">
            <Link to="/Cart" class="nav-link" aria-current="page" href="#">
              <i class="bi bi-cart4 positio-relative cart">
                <span
                  class="position-absolute
                  
                 translate-middle badge rounded-pill fs-4"
                >
                  1<span class="visually-hidden">unread messages</span>
                </span>
              </i>
            </Link>
          </li>
        </div>

        {/* Menu */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto text-center mb-2 mb-lg-0 ul-menu">
            {/*Link de Productos*/}
            <li class="nav-item">
              <Link
                to="/productos"
                aria-current="page"
                href="#"
              >
                Productos
              </Link>
            </li>

            {/* Input Buscar */}
            <form class="d-flex d-none d-lg-block w-25 mx-5">
              <input
                class="form-control me-md-3 "
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
            </form>

            {/* Dropdown Categorias */}
            <li class="nav-item dropdown">
              <a
                class="dropdown-toggle"
                href="index.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul
                class="dropdown-menu text-center"
                aria-labelledby="navbarDropdown"
              >
                <hr class="dropdown-divider"></hr>
                <Link to="/Tinto" class="dropdown-item">
                  Tinto
                </Link>
                <hr class="dropdown-divider"></hr>
                <Link to="/Blanco" class="dropdown-item">
                  Blanco
                </Link>
                <hr class="dropdown-divider"></hr>
                <Link to="/Rosado" class="dropdown-item">
                  Rosado
                </Link>
                <hr class="dropdown-divider"></hr>
              </ul>
            </li>

            {/* Login */}
            <li class="nav-item">
              <div className="login">
                {user.id ? (
                  <div className="form">
                    <Link to="/">{user.name}</Link>
                    <Link to="/" onClick={logoutButton}>
                      LogOut
                    </Link>
                  </div>
                ) : (
                  <div className="form">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Sing up</Link>
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

export default NavbarP;
