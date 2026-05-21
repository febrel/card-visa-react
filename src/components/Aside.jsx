import React from "react";
import progress1IMG from "../assets/cards/progress-1.webp";
import progress2IMG from "../assets/cards/progress-2.webp";
import progress3IMG from "../assets/cards/progress-3.webp";

function Aside() {
  return (
    <div className="container-aside">
      <div className="contenedor-cards">
        <div class="card">
          <div class="card-cabezera">
            <div class="contenedor-imagen">
              <img src={progress1IMG} alt="Imagen 1" />
            </div>

            <div class="contenedor-info">
              <p class="titulo-card">Más de</p>
              <p class="titulo-numero">23754</p>
              <p class="titulo-desc">Tarjetas emitidas</p>
            </div>
          </div>

          <div class="card-content">
            <p>
              Nuestro banco es un líder reconocido en la distribución de
              tarjetas de crédito. Emitimos más de 5000 tarjetas al año.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-cabezera">
            <div class="contenedor-imagen">
              <img src={progress1IMG} alt="Imagen 2" />
            </div>

            <div class="contenedor-info">
              <p class="titulo-card">Hasta un</p>
              <p class="titulo-numero">30%</p>
              <p class="titulo-desc">De rembolsos</p>
            </div>
          </div>

          <div class="card-content">
            <p>
              Ofrecemos una increíble cantidad de reembolso en efectivo por
              pagos realizados con una de nuestras tarjetas de crédito: Azul,
              Verde o Naranja.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-cabezera">
            <div class="contenedor-imagen">
              <img src={progress2IMG} alt="Imagen 3" />
            </div>

            <div class="contenedor-info">
              <p class="titulo-card">Hasta un</p>
              <p class="titulo-numero">25%</p>
              <p class="titulo-desc">En depositos</p>
            </div>
          </div>

          <div class="card-content">
            <p>
              Banque ofrece diversos depósitos en todas las monedas
              internacionales con tasas de interés de hasta el 25% para todos
              los clientes habituales.
            </p>
          </div>
        </div>
      </div>

      <div class="contenido-aside">
        <p class="bar">|</p>
        <h2>La mejor opción bancaria</h2>
        <p class="aside-text">
          Desde nuestra fundación, hemos sido la institución bancaria número uno
          para numerosos clientes particulares y empresas, tanto en EE. UU. como
          a nivel internacional. Ofrecemos a nuestros clientes una amplia gama
          de beneficios.
        </p>
      </div>
    </div>
  );
}

export default Aside;
