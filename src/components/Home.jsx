import React from "react";
<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel'
import carrusel1 from "../img/carrusel1.jpg"
import carrusel2 from "../img/carrusel2.jpg"
import carrusel3 from "../img/carrusel3.jpg"
=======
/* import { Link } from "react-router-dom"; */
import Carousel from "react-bootstrap/Carousel";
import carrusel1 from "../img/carrusel1.png";
import carrusel2 from "../img/carrusel2.png";
import carrusel3 from "../img/carrusel3.png";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "../state/cart";
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("/api/cart/get").then(({ data }) => {
      dispatch(setCart(data))
    });
  }, [dispatch]);

<<<<<<< HEAD
      <h2 className="fraseTitulo">Encuentre su próxima vivienda</h2>
=======
  return (
    <div className="container" style={{ paddingBottom: "2%" }}>
      <h2 className="fraseTitulo">
        El que al mundo vino y no toma vino,<span> ¿A QUE VINO?</span>
      </h2>
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd

      <div className="homeFotos">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={carrusel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carrusel2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carrusel3} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container fondo ">
        <h2 className="destacados">PROPIEDADES DESTACADAS</h2>
        <div className="row PopularCard">
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
<<<<<<< HEAD
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/47/54/02/84/1200x1200/1758910524.jpg" className="card-img-top hover" alt="..." />
=======
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <div className="card-body">
                <h3 className="card-title">Complejo Homes III</h3>
                <p className="card-text">
                  <strong>USD 148.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
<<<<<<< HEAD
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/49/01/60/56/360x266/1795282438.jpg" className="card-img-top hover" alt="..." />
=======
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <div className="card-body">
                <h3 className="card-title">Oliden 600</h3>
                <p className="card-text">
                  <strong>USD 160.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
<<<<<<< HEAD
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/49/26/99/33/360x266/1798026621.jpg" className="card-img-top hover" alt="..." />
=======
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <div className="card-body">
                <h3 className="card-title">Virrey Ceballos 400</h3>
                <p className="card-text">
                  <strong>USD 114.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
<<<<<<< HEAD
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/48/69/66/82/360x266/1785775970.jpg" className="card-img-top hover" alt="..." />
=======
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <div className="card-body">
                <h3 className="card-title">Santa María de Oro 2400</h3>
                <p className="card-text">
                  <strong>USD 198.000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
