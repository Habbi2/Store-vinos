import React from "react";
/* import { Link } from "react-router-dom"; */
import Carousel from "react-bootstrap/Carousel";
import carrusel1 from "../img/carrusel1.png";
import carrusel2 from "../img/carrusel2.png";
import carrusel3 from "../img/carrusel3.png";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "../state/cart";

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("/api/cart/get").then(({ data }) => {
      dispatch(setCart(data))
    });
  }, [dispatch]);

  return (
    <div className="container" style={{ paddingBottom: "2%" }}>
      <h2 className="fraseTitulo">
        El que al mundo vino y no toma vino,<span> ¿A QUE VINO?</span>
      </h2>

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
        <h2 className="destacados">PRODUCTOS DESTACADOS</h2>
        <div className="row PopularCard">
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p className="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p className="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p className="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                className="card-img-top hover"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p className="card-text">
                  <strong>$3,699.00</strong>
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
