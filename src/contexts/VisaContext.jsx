// VisaContext.js
import { createContext, useState, useContext } from "react";

const VisaContext = createContext();

function VisaProviderWrapper(props) {
  // Estado: ahora es un array
  const [visas, setVisas] = useState(() => {
    // Cargar datos guardados al iniciar
    const stored = localStorage.getItem("visas");
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar en localStorage cada vez que visas cambie
  function sincronizarStorage(nuevoArray) {
    localStorage.setItem("visas", JSON.stringify(nuevoArray));
    setVisas(nuevoArray);
  }

  // Función para agregar una nueva visa
  function addVisa(nuevaVisa) {
    const nuevaLista = [...visas, { ...nuevaVisa, id: Date.now() }];
    sincronizarStorage(nuevaLista);
  }

  return (
    <VisaContext.Provider value={{ visas, addVisa }}>
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
