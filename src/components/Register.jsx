import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../assets/style/loginRegister.scss'
import { useDispatch } from 'react-redux'
import { setRegisterRequest } from '../state/user'

const Register = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    state: '',
    password: '',
  })

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(setRegisterRequest(form))
    navigate('/login')
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear un usuario</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <div>
              <label>Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ingrese su nombre"
                required
                onChange={onChange}
              ></input>
            </div>
            <div>
              <label>Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="ingrese su apellido"
                required
                onChange={onChange}
              ></input>
            </div>
          </div>

          <div className="campo-form">
            <div>
              <label>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ingrese su email"
                required
                onChange={onChange}
              ></input>
            </div>

            <div>
              <label>Teléfono</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="ingrese su teléfono"
                required
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div className="campo-form">
            <div>
              <label>Ciudad</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="ingrese su ciudad"
                required
                onChange={onChange}
              ></input>
            </div>

            <div>
              <label>Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="ingrese su contraseña"
                required
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={'/Login'} className="enlace-cuenta">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  )
}

export default Register
