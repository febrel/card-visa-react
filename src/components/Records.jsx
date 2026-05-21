import React from "react";
import viewIMG from "../assets/ver.png";

function Records() {
  return (
    <div class="container-table">
      <div class="content-tarj">
        <div class="contenido-vis">
          <div class="cont-titulo">
            <p class="opaco">Total de visas </p>
            <p>
              <img src={viewIMG} alt="Ver" />
            </p>
          </div>

          <div id="numero-visas">0</div>
        </div>
      </div>

      <div class="table-estructura">
        <table id="table-visas">
          <caption>Tabla de Visas</caption>

          <thead>
            <tr>
              <th>NÚMERO DE TARJETA</th>
              <th>NOMBRE</th>
              <th>FECHA VENCIMIENTO</th>
              <th>CVV</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raza</td>
              <td>Jack Russell</td>
              <td>Caniche</td>
              <td>Caniche</td>
              <td class="acciones">
                <a href="generar.html?id=${id}" class="edit-acc">
                  Editar
                </a>
                <a href="#" data-cliente="${id}" class="elim-acc">
                  Eliminar
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
