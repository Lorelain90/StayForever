import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import logo from "./assets/heroimage.png";

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
      <div className="hero-image" src={logo} style={{ height: "50%" }}>
        <div className="hero-text">
          <h1
            className="title"
            style={{ fontStyle: "Georgia", color: "#fff", fontSize: 50 }}
          >
            Stay Forever
          </h1>
          <p>Trabajamos para tu tranquilidad y nos centramos en tus deseos</p>

          <a href="/cataloglist"><Button variant="outline-dark"  >
            {" "}
            Ver Inmuebles{" "}
          </Button>
          </a>
          <br></br>
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
      </div>
    </>
  );
}
