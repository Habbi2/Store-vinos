/* import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "../assets/styles/infoDetails.css";

const InfoDetails = () => {

  return (
    <div className="detail">
      <div className="background-image"></div>

      <div className="container columns is-mobile contentDetail">
        <div className="column">
          <figure>
            <img
              className="columnaImagen"
              src={"https://image.tmdb.org/t/p/w400" + contenido.poster_path}
              alt="poster_path"
            />
          </figure>
        </div>

        <div className="column columnaTexto">
          <h3 className="titulo">
            {contenido.original_title ? (
              <strong>{contenido.original_title}</strong>
            ) : (
              <strong>{contenido.name}</strong>
            )}{" "}
            (
            {contenido.release_date
              ? contenido.release_date.slice(0, 4)
              : contenido.first_air_date
              ? contenido.first_air_date.slice(0, 4)
              : "---"}
            )
          </h3>

          <div className="data1">
            <p>
              {contenido.release_date
                ? contenido.release_date
                : contenido.first_air_date}{" "}
              <strong>-</strong>{" "}
              {contenido.genres ? contenido.genres[0].name : "---"}{" "}
              <strong>-</strong>{" "}
              {contenido.runtime
                ? `${Math.trunc(contenido.runtime / 60)}h ${
                    contenido.runtime % 60
                  }m`
                : `${contenido.number_of_seasons} temporadas`}
            </p>
          </div>

          <div className="frase">
            <p>' {contenido.tagline ? contenido.tagline : contenido.title ? contenido.title : contenido.name}'</p>
          </div>

          <br />
          <div className="">
            <h3 className="vistageneral">
              <strong>Vista general</strong>
            </h3>
            <h3>{contenido.overview}</h3>
          </div>

          <br />

          <div>
            <div className="">
              <h3 className="">
                <strong>Puntuación de usuario</strong>
              </h3>
              <button className='button is-primary is-light is-rounded'>{<strong>{contenido.vote_average}/10</strong>}</button>
            </div>

            <div className="datos2">
              {contenido.created_by ? (
                <div className="">
                  <h3 className="">
                    <strong>Creada por</strong>
                  </h3>
                  {contenido.created_by[0].name}
                </div>
              ) : (
                <div className="">
                  <h3 className="">
                    <strong>Compania de produccion</strong>
                  </h3>
                  {contenido.production_companies
                    ? contenido.production_companies[0].name
                    : "---"}
                </div>
              )}

              <div>
                <h3>
                  <strong>Estado</strong>
                </h3>
                <h3>{contenido.status}</h3>
              </div>

              <div>
                <h3>
                  <strong>Idioma original</strong>
                </h3>
                <h3>
                  {contenido.spoken_languages
                    ? contenido.spoken_languages[0].english_name
                    : "---"}
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
 */