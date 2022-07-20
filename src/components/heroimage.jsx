import React from "react";
import { Button } from "react-bootstrap";
import "./heroimage.css";
import Catalog from './catalog';


export default function HeroImg() {
  return (
    <>
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
   <!-- JavaScript Bundle with Popper */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,700,800"
        rel="stylesheet"
      />
      <link href="./heroimage.css" rel="stylesheet" type="text/css" />
      <title>Document</title>
      <div className="hero-image" style={{ height: "50%" }}>
        <div className="hero-text">
          <h1 style={{ fontStyle: "Georgia", color: "#fff", fontSize: 50 }}>
            Stay Forever
          </h1>
          <p>Trabajamos para tu tranquilidad y nos centramos en tus deseos</p>
          <a href="#pisos">
          <a href="./Catalog" class="btn btn-info" role="button">Ver Inmuebles</a>
          </a>
        </div>
        <div id="popup1" className="overlay">
          <div className="popup">
            <a className="close" href="#"></a>
            <div className="content">
              <br />
              <br />
              <h2>Promotional Information &amp; Exclusions</h2>
              This is a list of exclusions
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        lightbox style popup goes here
      </div>
      );
      {"}"}
    </>
  );
}
