import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { setLogoutRequest, setUserMeRequest } from "../state/user";

const NavbarP = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);
  
  useEffect(() =>{
    dispatch(setUserMeRequest())
  },[dispatch])
  
  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };

  return (
    <nav className="navbar">
      <div className="titulo">
        <Link to="/">Alguien dijo vino ?</Link>
      </div>
      <div className="dropdown">
        <Link to="/productos">Productos</Link>
        <Link to="/categorias">Categorías</Link>

      </div>
        <input
          className="input is-rounded is-info"
          type="search"
          placeholder="Search..."
        />
      <div className="form">
        <Link to="/login">Login</Link>
        <Link to="/register">Sing up</Link>
      </div>
    </nav>
  );
};

export default NavbarP;
