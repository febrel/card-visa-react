import { useVisa } from "../contexts/VisaContext";
import chipIMG from "../assets/chip.png";
import visaIMG from "../assets/visa.png";
import { useState } from "react";

function VisaPage() {
  // Contexto
  const { visa, setVisa } = useVisa();

  // Variables - Estado
  const [errorMessage, setErrorMessage] = useState("");

  // Funciones
  function handleChange(e) {
    const { name, value } = e.target;

    let newValue;

    // Filtrar los valores no numéricos
    if (name === "numerVisa") {
      // Filtrar los valores no numéricos y limitar a 15 caracteres
      newValue = value.replace(/[^\d]/g, "").slice(0, 15);
    } else if (name === "name") {
      newValue = value
        .replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ´`]/g, "")
        .slice(0, 30)
        .toUpperCase();
    } else if (name === "date") {
      newValue = value;
    } else if (name === "cvv") {
      newValue = value.replace(/[^\d]/g, "").slice(0, 4);
    }

    setVisa((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));

    console.log(visa);
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
        <p id="tarjeta">{visa.numerVisa}</p>

        <div className="nombre-contenedor">
          <p className="titulo">NOMBRE:</p>
          <p id="nombreVisa">{visa.name}</p>
        </div>

        <div className="valido-contenedor">
          <p className="titulo">VÁLIDO HASTA:</p>
          <p id="validoVisa">{visa.date}</p>
        </div>
      </div>

      <br />

      <div className="container-form">
        <div className="espacio"></div>

        <form id="formulario">
          <div className="form-group">
            <label htmlFor="numero">Número de tarjeta</label>
            <input
              type="text"
              id="numero"
              name="numerVisa"
              placeholder="4568 4958 5049 4839"
              value={visa.numerVisa || ""}
              // oninput="if(this.value.length >= 16) this.value = this.value.slice(0, 16); this.value = this.value.replace(/[^\d]/g, '');"
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
              value={visa.name || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha vencimiento</label>
            <input type="date" id="fecha" name="date" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="CVV">Código de verificación</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="cvv"
              value={visa.cvv || ""}
              // onInput="if(this.value.length >= 4) this.value = this.value.slice(0, 4); this.value = this.value.replace(/[^\d]/g, '');"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="boton">
              Generar
            </button>
          </div>
        </form>

        {/* <p className="error">Todos los datos son obligatorios</p>
        <p className="correcto">Correcto</p> */}
      </div>
    </div>
  );
}

export default VisaPage;
