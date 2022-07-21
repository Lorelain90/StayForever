import React, { useRef } from 'react';
import '../components/style/detalle.css';
import emailjs from '@emailjs/browser';
import '../components/style/detalle.css';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0qe1j51', 'template_db0i0ja', form.current, 'A4BYfv2bcEfGW6hYA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="cajaContacto">
        <div className="organizacionContacto">
            <form ref={form} onSubmit={sendEmail} id="infoCON">
                <h1>Pregunta al anunciante </h1>
                <div className='datos_form'>
                <label>Nombre completo</label>
                <input type="text" name="user_name" required/>
                </div>
                <div className='datos_form'>
                <label>Correo electrónico</label>
                <input type="email" name="user_email" required/>
                </div>
                <div className='datos_form'>
                <label>Mensaje</label>
                <textarea name="message"
                    id="textoCuadro"
                    placeholder="Hola, me interesa este piso y me gustaría hacer una visita. Un saludo"
                    defaultValue={""} rows="3" required
                />   
                </div>
                <button type="button" id="botonCON">
                    <input type="submit" value="Enviar" />
                </button>
            </form>
                <p>912 77 20 50</p>
                <p>912 77 20 50</p>
            <h4>Profesional</h4>
            <p>Ambrosio Hathaway</p>
            <p>Pepito de los Palotes</p>
        </div>
        </div>
    );
};
export default Form;