import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const InfoDetails = () => {
  const { name } = useParams();
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/find/${name}`)
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
            <div className="col-lg-7 col-md-7 col-sm-6">
              <h2 className="card-title d-flex pt-4">{contenido.name}</h2>
              <h3 className="card-subtitle d-flex">{contenido.cellar}</h3>
              <h4 className="box-title mt-5 card-d">DESCRIPCION</h4>
              <p className="me-5">{contenido.description}</p>
              <h2 className="mt-5 d-flex">
                ${contenido.price},00<small class="text-success"></small>
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
              {/* <ul class="list-unstyled">
                <li>
                  <i class="fa fa-check text-success"></i>muy bueno
                </li>
                <li>
                  <i class="fa fa-check text-success"></i>pega como coto
                </li>
                <li>
                  <i class="fa fa-check text-success"></i>muy bueno
                </li>
              </ul> */}
              <form>
                <p class="clasificacion">
                <input id="radio1" type="radio" name="estrellas" value="5"/>
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4"></input>
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3"></input>
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2"></input>
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1"></input>
                <label for="radio5">★</label>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoDetails;
