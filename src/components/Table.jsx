import React from "react";
import { useVisa } from "../contexts/VisaContext";
import { useNavigate } from "react-router-dom";

function Table() {
  // Contexto
  const { visas, deleteVisa } = useVisa();

  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	Variables - Estado
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  const navigate = useNavigate(); // Navega
  const visasHTML = visas.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.numerVisa}</td>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td>{item.cvv}</td>
        <td className="acciones">
          <a
            onClick={() => {
              navigate("/visa", { state: { id: item.id } });
            }}
            className="edit-acc"
          >
            Editar
          </a>
          <a onClick={() => deleteVisa(item.id)} className="elim-acc">
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
