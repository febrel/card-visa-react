import { useState, useEffect } from "react";
import { useVisa } from "../contexts/VisaContext";
import { useNavigate, useLocation } from "react-router-dom";
import chipIMG from "../assets/chip.png";
import visaIMG from "../assets/visa.png";

function VisaPage() {
  // Variables - Estado
  const navigate = useNavigate(); // Navega
  const location = useLocation(); // Hook para acceder al estado
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    numerVisa: "",
    name: "",
    date: "",
    cvv: "",
  });

  // Contexto
  const { visas, addVisa, updateVisa } = useVisa();

  // Extraemos el id desde location.state
  const id = location.state?.id;

  // Efecto para cargar si esta editando
  useEffect(() => {
    if (id) {
      // Buscamos la visa que coincida con el ID de la URL
      const visaAEditar = visas.find((v) => {
        return v.id === parseInt(id);
      });

      // si encuentra algo lo edita
      if (visaAEditar) {
        setFormData(visaAEditar);
      }
    }
  }, [id, visas]);

  // Funciones
  function handleChange(e) {
    cleanAlert();

    const { name, value } = e.target;
    let newValue = value;

    if (name === "numerVisa") {
      newValue = value.replace(/[^\d]/g, "").slice(0, 16);
    } else if (name === "name") {
      newValue = value
        .replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]/g, "")
        .slice(0, 30)
        .toUpperCase();
    } else if (name === "cvv") {
      newValue = value.replace(/[^\d]/g, "").slice(0, 4);
    }

    // Para date no se aplica filtro

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validar campos obligatorios
    if (
      !formData.numerVisa ||
      !formData.name ||
      !formData.date ||
      !formData.cvv
    ) {
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    // Validar largo de numero de tarjeta
    if (formData.numerVisa.length !== 16) {
      setErrorMessage("El número de tarjeta debe tener 16 dígitos");
      return;
    }

    // Validar largo de numero de cvv
    if (formData.cvv.length !== 4) {
      setErrorMessage("El número de cvv debe ser 4 dígitos");
      return;
    }

    // Agregar la nueva visa al array del contexto
    addVisa(formData);

    if (id) {
      // Modo edicion
      updateVisa(parseInt(id), formData);
    } else {
      // Modo creacion
      addVisa(formData);
    }

    navigate("/");
  }

  function cleanAlert() {
    setErrorMessage("");
  }

  return (
    <div className="contenedor">
      <div className="contenedor-tarjeta">
        <p className="logo">
          <img src={chipIMG} alt="" />
        </p>
        <p className="visa">
          <img src={visaIMG} alt="" />
        </p>
        <p id="tarjeta">{formData.numerVisa || "**** **** **** ****"}</p>
        <div className="nombre-contenedor">
          <p className="titulo">NOMBRE:</p>
          <p id="nombreVisa">{formData.name || ""}</p>
        </div>
        <div className="valido-contenedor">
          <p className="titulo">VÁLIDO HASTA:</p>
          <p id="validoVisa">{formData.date || ""}</p>
        </div>
      </div>

      <br />

      <div className="container-form">
        <div className="espacio"></div>
        <form id="formulario" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="numero">Número de tarjeta</label>
            <input
              type="text"
              id="numero"
              name="numerVisa"
              placeholder="4568 4958 5049 4839"
              value={formData.numerVisa}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Nombre (como figura en la tarjeta)</label>
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="Nombre del usuario"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha vencimiento</label>
            <input
              type="date"
              id="fecha"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="CVV">Código de verificación</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="cvv"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="boton">
              Agregar tarjeta
            </button>
          </div>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default VisaPage;
