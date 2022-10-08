import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Comarcas = () => {
  return (
    <div className="container">
      <div className="row justify-content-center w-100">
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text m-1">
              <h3>Caldas</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h3>Valga</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h3>Portas</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center w-100">
        <div className="card card_home m-2 col col-lg-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h3>Catoira</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col-xl-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h3>Cuntis</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="card card_home m-2 col-xl-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image014.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">
              <h3>Pontecesures</h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
