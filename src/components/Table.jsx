import React from "react";
import { useVisa } from "../contexts/VisaContext";

function Table() {
  // Contexto
  const { visas } = useVisa();

  // Variables - Estado
  const visasHTML = visas.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.numerVisa}</td>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td>{item.cvv}</td>
        <td className="acciones">
          <a href="generar.html?id=${id}" className="edit-acc">
            Editar
          </a>
          <a href="#" data-cliente="${id}" className="elim-acc">
            Eliminar
          </a>
        </td>
      </tr>
    );
  });

  return (
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
        <tbody>{visasHTML}</tbody>
      </table>
    </div>
  );
}

export default Table;
