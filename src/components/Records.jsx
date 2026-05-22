import React from "react";
import { useVisa } from "../contexts/VisaContext";
import Table from "../components/Table";
import viewIMG from "../assets/ver.png";

function Records() {
  // Contexto
  const { lenVistas } = useVisa();

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
          <div id="numero-visas">{lenVistas()}</div>
        </div>
      </div>

      {lenVistas() > 0 && <Table />}
    </div>
  );
}

export default Records;
