import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar_titulo text-center m-2">
        <h1>
          <b>AMOR A MORAÑA</b>
        </h1>
        <h5>Revista dos amigos e amigas da terra</h5>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light m-2">
        <div className="">
          <Link to="/" className="navbar-brand">
            MORAÑA
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Ocio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ciencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ecoloxía
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deporte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sociedade
              </a>
            </li>
            <li className="nav-item">
              <Link to="/musica" className="nav-link">
                Música
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gastronomía
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <Link to="/comarcas" className="nav-link">
                Comarcas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quiz" className="nav-link">
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
