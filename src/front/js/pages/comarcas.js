import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Comarcas = () => {
  return (
    <div className="container">
      <div className="row justify-content-center w-100">
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Caldas</h1>
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Valga</h1>
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Portas</h1>
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center w-100">
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Catoira</h1>
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col-xl-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Cuntis</h1>
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col-xl-4">
          <img
            className="card-img-top"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h1>Pontecesures</h1>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
