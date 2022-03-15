import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import logo from "../img/logo.png";


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
          <img src={logo} alt="..." style={{ width: 50 }} />
          ALGUIEN DIJO VINO ?
        </Link>
      </div>

      <div className="dropdown">
        <Link to="/productos">Productos</Link>
        <Link to="/categorias">Categorías</Link>
        <input
          className="input is-rounded is-info"
          type="search"
          placeholder="Search..."
        />
      </div>

      <div className="carrito">
        <i class="bi bi-cart4 positio-relative">
          <span class="position-absolute  translate-middle badge rounded-pill bg-success fs-4 size-badge">
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
