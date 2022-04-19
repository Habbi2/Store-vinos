import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {setAddCart} from "../state/cart"


const InfoDetails = () => {
  const dispatch = useDispatch();

  const { name, id } = useParams();
  const [contenido, setContenido] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/find/${name}/${id}`)
      .then(({ data }) => {
        setContenido(data);
      });
  }, [name]);


  const handleAddCart = () => {
    dispatch(setAddCart({id:contenido.id}))
  }

  return (
    <div className="container cuadro">
      <div className="cardDetail">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="white-box text-center ">
                <img src={contenido.image} className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className="card-title d-flex pt-4">{contenido.name}</h2>
              <h3 className="card-subtitle d-flex">{contenido.location}</h3>
              <hr className="dropdown-divider me-5"></hr>
              <h4 className="box-title mt-5 card-d">DESCRIPCION</h4>
              <p className="me-5">{contenido.description}</p>
              <h2 className="mt-5 d-flex">
                USD{contenido.price}.000<small className="text-success"></small>
              </h2>
              <hr className="dropdown-divider me-5"></hr>
              {/* <button
                className="btn btn-dark btn-rounded me-4"
                data-toggle="tooltip"
                title=""
                data-original-title="Add to cart"
                onClick={handleAddCart}
              >
                <i className="fa fa-shopping-cart cart"></i>
<<<<<<< HEAD
              </button> */}
=======
              </button>

              <Link to="/checkout">
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <button className="btn btn-rounded btn-buy">
                <strong>Reservar visita</strong>
              </button>
<<<<<<< HEAD
              {/* <h3 className="box-title mt-5">VALORACION</h3>
=======
              </Link>

              <h3 className="box-title mt-5">VALORACION</h3>
>>>>>>> dc0465699b5b05f261bea843a1b2a374741a5ffd
              <ul className="list-unstyled">
                <li>{contenido.qualification}★ / 5★</li>
              </ul> */}
          
              <button className="btn btn-rounded btn-buy">
              <i class="fa fa-heart"></i> <span><strong>Agregar a favoritos</strong></span>
              </button>

              <div className="categorias">
                <h3 className="box-title mt-5">
                  Categoria:
                  <Link to={`/categories/${contenido.category}`}>
                    <span> {contenido.category}</span>
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
