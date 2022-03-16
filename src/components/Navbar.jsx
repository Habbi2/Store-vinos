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
    <nav className="navbar navbar-expand-lg">
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

       <button
        class="navbar-toggler border border-light sandwich"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list fs-1 text-light" ></i>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <div className="productos">
        <Link to="/productos">Productos</Link>
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
              <a class="dropdown-item nohover" href="#">
                Tinto
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                Blanco
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item nohover" href="#">
                Rosado
              </a>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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

export default NavbarP;
