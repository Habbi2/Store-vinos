import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const InfoDetails = () => {
  const { name, id } = useParams();
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/find/${name}`)
      .then(({ data }) => {
        setContenido(data);
      });
  }, [name]);

  return (
    <div class="container cuadro">
      <div class="cardDetail">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-6">
              <div class="white-box text-center ">
                <img src={contenido.image} class="img-responsive" />
              </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
              <h2 class="card-title d-flex pt-4">{contenido.name}</h2>
              <h3 class="card-subtitle d-flex">{contenido.cellar}</h3>
              <h4 class="box-title mt-5 card-d">DESCRIPCION</h4>
              <p class="me-5">{contenido.description}</p>
              <h2 class="mt-5 d-flex">
                ${contenido.price},00<small class="text-success"></small>
              </h2>
              <button
                class="btn btn-dark btn-rounded me-4"
                data-toggle="tooltip"
                title=""
                data-original-title="Add to cart"
              >
                <i class="fa fa-shopping-cart cart"></i>
              </button>
              <button class="btn btn-rounded btn-buy">
                <strong>COMPRAR</strong>
              </button>
              <h3 class="box-title mt-5">VALORACION</h3>
              <ul class="list-unstyled">
                <li>
                  {contenido.qualification}★ / 5★
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoDetails;
