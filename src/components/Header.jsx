import React from "react";
import { Link } from "react-router-dom";
import tarjetaIMG from "../assets/tarjeta.png";

function Header() {
  return (
    <div className="container-header">
      <div className="header-izq">
        <h1 className="titulo">Juntos logramos un mundo mejor</h1>
        <p className="parrafo">
          Utilizamos el poder de nuestra marca, la influencia de la industria y
          la voz colectiva para ayudar a provocar un cambio positivo en las
          comunidades en las que trabajamos y vivimos.
        </p>
        <p className="btn-visa">
          <Link to="/visa">Generar Visa</Link>
        </p>
      </div>

      <div className="header-der">
        <p>
          <img src={tarjetaIMG} alt="tarjeta" />
        </p>
      </div>
    </div>
  );
}

export default Header;
