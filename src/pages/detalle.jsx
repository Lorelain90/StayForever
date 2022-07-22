import React, { useRef } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { Button } from "react-bootstrap";
import perfil from "../components/assets/perfil.png";
import palabra from "../components/assets/palabra.png";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0qe1j51",
        "template_db0i0ja",
        form.current,
        "A4BYfv2bcEfGW6hYA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="barraSuperior">
        <a href="/">
          <img className="logo" src={palabra} alt="palabra" />
        </a>
        <img className="profile" src={perfil} alt="perfil" />
      </div>
      <div className="cajaContacto">
        <div className="organizacionContacto">
          <form ref={form} onSubmit={sendEmail} id="infoCON">
            <h1>Pregunta al anunciante </h1>
            <div className="datos_form">
              <label>Nombre completo</label>
              <br />
              <input type="text" name="user_name" required />
            </div>
            <div className="datos_form">
              <label>Correo electrónico</label>
              <br />
              <input type="email" name="user_email" required />
            </div>
            <div className="datos_form">
              <label>Mensaje</label>
              <br />
              <textarea
                name="message"
                id="textoCuadro"
                placeholder="Hola, me interesa este piso y me gustaría hacer una visita. Un saludo"
                defaultValue={""}
                rows="3"
                required
              />
            </div>
            <Button className="#botonCON">
              <input type="submit" value="Contactar" />
            </Button>
          </form>
          <div>
            <p>912 77 20 50 </p>
            <p>912 77 20 50</p>
          </div>
          <h4>Profesional</h4>
          <p className="contactar">Ambrosio Hathaway</p>
          <p className="contactar">Pepito de los Palotes</p>
        </div>
      </div>
    </>
  );
}
export default Form;
