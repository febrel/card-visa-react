import { createContext, useState, useContext } from "react";

const VisaContext = createContext();

function VisaProviderWrapper(props) {
  // Varibales - Estado
  const [visa, setVisa] = useState({
    numerVisa: null,
    name: null,
    date: null,
    cvv: null,
  });

  return (
    <VisaContext.Provider value={{ visa, setVisa }}>
      {props.children}
    </VisaContext.Provider>
  );
}

export { VisaContext, VisaProviderWrapper };

// Forma de crear un HOOK propio
export function useVisa() {
  const context = useContext(VisaContext);

  return context;
}
