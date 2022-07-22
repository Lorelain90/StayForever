import React from "react";
import '../components/style/detalle.css';
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Form from "../components/Form"
import piso1 from "../components/assets/piso1.jpg";

export default function DetalleExperiencia() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      const item = response.data.find(
        (dataItem) => dataItem.id === parseInt(id)
      );
      setData(item);
    });
  }, [id]);

  return (
    <>
      <div class="barraSuperior">
      </div>
      <div class="fatherBOX">
        <div class="boxDT">
          <img className="imgSize" src={piso1} alt="piso" />
          <h4>Vivienda 93m² – 3 habitaciones en Carrer de la Diputació 407</h4>
          <h2>415.000 €</h2>
          <p class="infoData">La vivienda es exterior y tiene una superfície de 93 m² construidos muy bien aprovechados.  Está en la sexta planta real de la finca, y tiene una terraza 2.54 metros cuadrados. Cuenta con:
            <br />
            Dormitorio principal<br />
            2 Dormitorios individuales<br />
            Dos baños (uno en suite)<br />
            Salón amplio con vistas al exterior y acceso a balcón<br />
            Cocina abierta al salón<br />
            Lavadero<br />
            Recibidor<br />

            La calefacción es individual por gas y los radiadores son todos nuevos. Las ventanas son de climalit doble y las puertas son nuevas y blancas de madera. Toda la vivienda tiene suelos de tarima y paredes lisas. Tiene orientación, suroeste.
            La vivienda se entrega a estrenar: baños completos, cocina a medida completa con muebles y electrodomésticos.</p>
        </div>
        <Form />
      </div>
    </>

  );
}
