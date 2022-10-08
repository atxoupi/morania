import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 m-3">
      <h4>Datos e Cifras</h4>
      <p>
        Moraña é un pobo da comarca de Caldas que ten unha extensión de 41,50
        km² e ten unha pooboación de 4121 habitantes.
      </p>
      <p>
        Parroquias: Amil, Cosoirado, Gargantáns, Laje, Lamas, Moraña, Rebón,
        Santa Justa de Moraña e Sayáns.
      </p>
      <div className="d-flex justify-content-center mb-2">
        <div className="card card_home m-2 p-2">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image002.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Coñece a Xesús Ferro Ruibal, Intelectual, nado en Rebón. A persoa
              máis notable da contorna segundo:{" "}
              <Link to="\tjukanovt.github.io/notable-people">
                https://tjukanovt.github.io/notable-people
              </Link>
            </p>
          </div>
        </div>
        <div className="card card_home m-2 p-2">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image004.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Informe rapa 2022. Cabaña cabalar de Moraña
            </p>
          </div>
        </div>
        <div className="card card_home m-2 p-2">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image006.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              Inicio curso escolar 2022-23<br></br>
              Calendario curso <br></br>Datos inicio
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div
          id="carouselExampleIndicators"
          className="carousel slide w-50"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://morania.gal/index_archivos/image010.jpg"
                alt="Corrigatos"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://morania.gal/index_archivos/image012.jpg"
                alt="Paraños"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};
