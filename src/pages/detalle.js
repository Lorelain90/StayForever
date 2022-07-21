import React from "react";
import '../components/style/detalle.css';
import ReactDOM from "react-dom";
import Pisos from '../../public/data';
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function DetallePisos(pisos) {
  return (
    <section style={{ backgroundColor: "#fbf1e4", paddingTop: "2rem" }}>
  <div className="fatherBOX">
    <div className="boxDT">
    <div>
      {pisos.title}
      </div>
      <img className="imgDT"/>
      <div>
      {pisos.Precio}
      </div>
    </div>
    <div>
      {pisos.m}
      {pisos.Ascensor}
      {pisos.Garaje}
      {pisos.Descripcion}
      </div>


    <div className="cajaContacto">
      <div className="organizacionContacto">
        <h2>Pregunta al anunciante</h2>
        <form id="infoCON" method="post">
          <textarea
            id="textoCuadro"
            placeholder="Hola, me interesa este piso y me gustaría hacer una visita. Un saludo"
            defaultValue={""}
          />
          <button id="botonCON">Contactar</button>
        </form>
        <a href="">
          <p>912 77 20 50</p>
        </a>
        <a href="">
          <p>912 77 20 50</p>
        </a>
        <h4>Profesional</h4>
        <p>Berskhire Hathaway</p>
        <p>Berskhire Hathaway</p>
      </div>
    </div>
  </div>
    </section>

  );
}
