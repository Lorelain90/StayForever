import React from "react";
import '../components/style/detalle.css';
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

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
    <section style={{ backgroundColor: "#fbf1e4", paddingTop: "2rem" }}>
      <Card style={{ marginLeft: "5rem", paddingBottom: "4rem" }}></Card>
      <div className="Container"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "77.9vh",
        }}
      >
        <Card style={{ display: "flex", width: "90%" }}>
          <img src={data.img} alt="" width="442" height="284" />
          <p
            variant="body1"
            color=" #2e5137"
            fontSize="1em"
            fontWeight="400"
            style={{ paddingLeft: "1.5rem", paddingRight: "2rem" }}
          >
            {data.description}
          </p>
        </Card>
      </div>
      <Card>
  <title>Contacta con el anunciante</title>
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
      <p>Ambrosio Hathaway</p>
      <p>Pepito de los Palotes</p>
    </div>
  </div>
</Card>
    </section>

  );
}
