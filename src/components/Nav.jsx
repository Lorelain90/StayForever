import React from "react";
import './style/Nav.css'
import perfil from '../components/assets/perfil.png';
import palabra from '../components/assets/palabra.png';


export default function Navbar() {
  return (
    <div className="barraSuperior">

      <img className="logo" src={palabra} alt="palabra"/>
      <img className="profile" src={perfil} alt="perfil"/>
    </div>
  );
}
