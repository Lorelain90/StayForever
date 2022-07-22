import React from "react";
import "../App.css";
import detalle from './detalle';
import perfil from "../components/assets/perfil.png";
import palabra from "../components/assets/palabra.png";
import piso1 from "../components/assets/piso1.jpg";
import piso2 from "../components/assets/piso2.jpg";
import piso3 from "../components/assets/piso3.jpg";
import piso4 from "../components/assets/piso4.jpg";
import piso5 from "../components/assets/piso5.jpg";
import piso6 from "../components/assets/piso6.jpg";
import piso7 from "../components/assets/piso7.jpg";
import piso8 from "../components/assets/piso8.jpg";
import piso9 from "../components/assets/piso9.jpg";

export default function Catalog() {
  return (
    <>
      <div>
        <div className="galeriaGrid">
          <div className="infoBox" href={detalle}>
            <img className="imgSize" src={piso1} alt="piso" />
            <h2>172.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso2} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso3} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso4} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso5} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso6} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso7} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso8} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
          <div className="infoBox">
            <img className="imgSize" src={piso9} alt="piso" />
            <h2>192.000$</h2>
            <h4>Pisos con terraza, los más buscados</h4>
            <p>
              Puedes cenar y comer en el exterior con la familia y amigos, tomar
              el sol y mirar las estrellas, tener un pequeño huerto urbano...
              existen mil posibilidades.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
