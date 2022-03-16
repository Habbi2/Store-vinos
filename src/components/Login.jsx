import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/loginRegister.scss";
import { setLoginRequest } from "../state/user";
import { useDispatch } from "react-redux"

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoginRequest(form));
    navigate("/");
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/Register"} className="enlace-cuenta">
          Crear usuario
        </Link>
      </div>
    </div>
  );
};

export default Login;
