import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaPage from "./pages/VisaPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visa" element={<VisaPage />} />
      </Routes>
    </div>
  );
}

export default App;
