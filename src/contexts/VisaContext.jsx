// VisaContext.js
import { createContext, useState, useContext } from "react";

const VisaContext = createContext();

function VisaProviderWrapper(props) {
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	Variables - Estado
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  // Contexto
  const { lenVistas } = useVisa();

  // Estado: ahora es un array
  const [visas, setVisas] = useState(() => {
    // Cargar datos guardados al iniciar
    const stored = localStorage.getItem("visas");
    return stored ? JSON.parse(stored) : [];
  });

  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	Funciones
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

  // Guardar en localStorage
  function sincronizarStorage(nuevoArray) {
    localStorage.setItem("visas", JSON.stringify(nuevoArray));
    setVisas(nuevoArray);
  }

  // add
  function addVisa(nuevaVisa) {
    const nuevaLista = [...visas, { ...nuevaVisa, id: Date.now() }];
    sincronizarStorage(nuevaLista);
  }

  // delete
  function deleteVisa(idVisa) {
    let arrayNuevo = [];

    arrayNuevo = visas.filter((visa) => {
      return visa.id !== idVisa;
    });

    sincronizarStorage(arrayNuevo);
  }

  // update
  function updateVisa(id, datosActualizados) {
    const nuevaLista = visas.map((visa) => {
      if (visa.id === id) {
        return { ...visa, ...datosActualizados };
      }
      return visa;
    });

    sincronizarStorage(nuevaLista);
  }

  function lenVistas() {
    const countVistas = Object.keys(visas).length;
    return countVistas;
  }

  return (
    <VisaContext.Provider
      value={{ visas, addVisa, lenVistas, deleteVisa, updateVisa }}
    >
      {props.children}
    </VisaContext.Provider>
  );
}

export { VisaContext, VisaProviderWrapper };

export function useVisa() {
  const context = useContext(VisaContext);
  if (!context) {
    throw new Error("useVisa debe usarse dentro de VisaProviderWrapper");
  }
  return context;
}
