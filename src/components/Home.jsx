import React from "react";
/* import { Link } from "react-router-dom"; */
import Carousel from 'react-bootstrap/Carousel'
import carrusel1 from "../img/carrusel1.png"
import carrusel2 from "../img/carrusel2.png"

const Home = () => {
  return (
<>
      <div className="homeFotos">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

      <div class="container">
        <h2>PRODUCTOS DESTACADOS</h2>
        <div class="row">
          <div class="col-sm">
            <div class="card" style={{ width: "25rem" }}>
              <img src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" class="card-img-top homeCard" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p class="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "25rem" }}>
              <img src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" class="card-img-top homeCard" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p class="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "25rem" }}>
              <img src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" class="card-img-top homeCard" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p class="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" style={{ width: "25rem" }}>
              <img src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" class="card-img-top homeCard" alt="..." />
              <div class="card-body">
                <h3 class="card-title">Moda' Montepulciano d'Abruzzo</h3>
                <p class="card-text">
                  <strong>$3,699.00</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
