import React from "react";
import viewIMG from "../assets/ver.png";

function Records() {
  return (
    <div className="container-table">
      <div className="content-tarj">
        <div className="content-vis">
          <div className="cont-title">
            <p className="opaco">Total de visas </p>
            <p>
              <img src={viewIMG} alt="Ver" />
            </p>
          </div>

          <div id="numero-visas">0</div>
        </div>
      </div>

      <div className="table-structure">
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
              <td>129043849847578</td>
              <td>LUIS FEBRE PAUCAR</td>
              <td>2026-05-15</td>
              <td>0493</td>
              <td className="acciones">
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
