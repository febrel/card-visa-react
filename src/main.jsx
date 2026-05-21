import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { VisaProviderWrapper } from "./contexts/VisaContext.jsx";
// Importas los pesos de Roboto
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <VisaProviderWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </VisaProviderWrapper>,
  // </StrictMode>,
);
