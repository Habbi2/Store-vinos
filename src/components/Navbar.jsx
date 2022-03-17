import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import logoCopa from "../img/logoCopa.png";

import { setLogoutRequest, setUserMeRequest } from "../state/user";

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);

  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };

  return (
    <nav className="navbar">
      <div class="sandwich">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-dark dropdown-toggle boton-despliegue is-info"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {<i class="bi bi-list fs-1 text-light"></i>}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item nohover" href="#">
                PRODUCTOS
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                CATEGORÍAS
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                BUSCAR
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                LOGIN
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                SING UP
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="titulo">
        <Link to="/">
          <img
            className="navbar-brand"
            src={logoCopa}
            alt=""
            style={{ width: 50 }}
          />
          Alguien dijo Vino?
        </Link>
      </div>

      <div class="container1">
        <div className="productos">
          <Link to="/products">Productos</Link>
          <input
            className="input is-rounded is-info"
            type="search"
            placeholder="Buscar..."
          />

          <div class="btn-group">
            <button
              type="button"
              class="btn btn-dark dropdown-toggle boton-despliegue is-info"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CATEGORIAS
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link class="dropdown-item nohover" to="/categories/tintos">
                  Tinto
                </Link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <Link class="dropdown-item nohover" to="/categories/blancos">
                  Blanco
                </Link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <Link class="dropdown-item nohover" to="/categories/rosados">
                  Rosado
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="carrito">
        <i class="bi bi-cart4 positio-relative">
          <span class="position-absolute  translate-middle badge rounded-pill fs-4 size-badge">
            1<span class="visually-hidden">unread messages</span>
          </span>
        </i>
      </div>
      <div class="container1">
        <div className="log">
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
      </div>
    </nav>
  );
};

export default Navbar;
