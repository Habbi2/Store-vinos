import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import carrusel1 from "../img/carrusel1.jpg"
import carrusel2 from "../img/carrusel2.jpg"
import carrusel3 from "../img/carrusel3.jpg"

const Home = () => {
  return (
<div className="container" style={{paddingBottom : '2%'}}>

      <h2 className="fraseTitulo">Encuentre su próxima vivienda</h2>

      <div className="homeFotos">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel3}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
      </div>

      <div className="container fondo ">
        <h2 className="destacados">PROPIEDADES DESTACADAS</h2>
        <div className="row PopularCard">
          <div className="col-sm">
            <div className="card shadow" style={{ width: "25rem" }}>
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/47/54/02/84/1200x1200/1758910524.jpg" className="card-img-top hover" alt="..." />
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
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/49/01/60/56/360x266/1795282438.jpg" className="card-img-top hover" alt="..." />
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
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/49/26/99/33/360x266/1798026621.jpg" className="card-img-top hover" alt="..." />
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
              <img src="https://imgar.zonapropcdn.com/avisos/1/00/48/69/66/82/360x266/1785775970.jpg" className="card-img-top hover" alt="..." />
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
