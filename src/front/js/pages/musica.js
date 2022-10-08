import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Musica = () => {
  return (
    <div className="container">
      <div className="row justify-content-center w-100">
        <div className="card card_musica m-2 col col-lg-4">
          <img
            className="card-img-top mt-2"
            src="https://morania.gal/index_archivos/image018.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h3>Santiago Díaz</h3>
            <p className="card-text m-1">
              Caldense, ex traballador do centro de saúde de Moraña, adícanos o
              seu último traballo.
            </p>
          </div>
          {/* comienza Modal */}
          {/* <!-- Trigger the modal with a button --> */}
          <button
            type="button"
            className="btn btn-outline-secondary m-2"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Escoitar
          </button>

          {/* <!-- Modal --> */}
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              {/* <!-- Modal content--> */}
              <div className="modal-content w-100">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 className="modal-title">O camiño</h4>
                </div>
                <div className="modal-body">
                  <iframe
                    width="460"
                    height="315"
                    src="https://www.youtube.com/embed/IL46DRePWzM"
                    title="YouTube video player"
                    frameborder="1"
                    allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                  >
                    Pechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* finaliza Modal */}
        </div>
      </div>
    </div>
  );
};
