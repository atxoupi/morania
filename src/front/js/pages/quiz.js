import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Quiz = () => {
  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-user"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className=" container h-60">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className=" card-registration"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-3 p-md-5">
                    <h4 className="mb-4 pb-2 pb-md-0 mb-md-5 text-center">
                      Vamos a facer unha pequena enquisa!!
                    </h4>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="Nome"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="Apelidos"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-3 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              id="emailAddress2"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="email@email.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-3 pb-2">
                          <div className="form-outline">
                            <label>¿Cantos habitantes ten Moraña?</label>
                            <input
                              type="text"
                              id="examplePassword1"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="Responda a esta pregunta"
                              required
                              //   pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,22}$"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-3 pb-2">
                          <div className="form-outline">
                            <label>
                              Nomea a un ciudadano ilustre do noso pobo
                            </label>
                            <input
                              type="text"
                              id="examplePassword2"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="Responda a esta pregunta"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-3 pb-2">
                          <div className="form-outline">
                            <label>
                              ¿Cal é o ano de fundación do equipo de futbol de
                              Moraña?
                            </label>
                            <input
                              type="text"
                              id="examplePassword2"
                              className="form-control form-control-signup form-control-lg"
                              placeholder="Responda a esta pregunta"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center pt-2">
                        <input
                          className="btn btn-outline-secondary btn-lg m-2"
                          type="submit"
                          value="Enviar"
                          id="submitButton1"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
