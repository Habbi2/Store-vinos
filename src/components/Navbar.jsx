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
    <nav className="navbar">
      <div className="titulo">
        <Link to="/">
          <img className="navbar-brand" src={logoCopa} alt="" />
          Alguien <br /> dijo <br /> Vino?
        </Link>
      </div>



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
      

      <div className="carrito">
        <i class="bi bi-cart4 positio-relative">
          <span class="position-absolute  translate-middle badge rounded-pill bg-cart fs-4 size-badge">
            1<span class="visually-hidden">unread messages</span>
          </span>
        </i>
      </div>

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
    </nav>
  );
};

export default NavbarP;
