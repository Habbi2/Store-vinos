import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const InfoDetails = () => {
  const { name, id } = useParams();
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/find/${name}/${id}`)
      .then(({ data }) => {
        setContenido(data);
      });
  }, [name]);

  return (
    <div className="container cuadro">
      <div className="cardDetail">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6">
              <div className="white-box text-center ">
                <img src={contenido.image} className="img-responsive" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <h2 className="card-title d-flex pt-4">{contenido.name}</h2>
              <h3 className="card-subtitle d-flex">{contenido.cellar}</h3>
              <h4 className="box-title mt-5 card-d">DESCRIPCION</h4>
              <p className="me-5">{contenido.description}.</p>
              <h2 className="mt-5 d-flex">
                ${contenido.price},00<small className="text-success"></small>
              </h2>
              <button
                className="btn btn-dark btn-rounded me-4"
                data-toggle="tooltip"
                title=""
                data-original-title="Add to cart"
              >
                <i className="fa fa-shopping-cart cart"></i>
              </button>
              <button className="btn btn-rounded btn-buy">
                <strong>COMPRAR</strong>
              </button>
              <h3 className="box-title mt-5">VALORACION</h3>
              <ul className="list-unstyled">
                <li>{contenido.qualification}★ / 5★</li>
              </ul>

              <div className="categorias">
                <h3 className="box-title mt-5">
                  Categoria:
                  <Link to={`/categories/${contenido.breed}`}>
                    <span>{contenido.breed}</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoDetails;
