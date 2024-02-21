/* ORIGINAL
import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
ORIGINAL */ 
import React, { useState } from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  // Utilizamos el estado para almacenar el valor del input
  const [textInput, setTextInput] = useState("");

  // Manejador de cambios en el input
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };

  // Manejador para el botón de enviar
  const handleEnviarClick = () => {
    // Aquí puedes realizar alguna acción con el valor del input, por ejemplo, enviarlo a un servidor
    alert(`Texto a enviar: ${textInput}`);
  };

{/*Descomentar todo el párrafo en caso de que se requiera hacer un mapeo de la informacion con las etiquetas de las llaves*/}
{/* 
  return (
    <div className="Updates">
      {/* Mapeo de los datos existentes */}
{/*      {UpdatesData.map((update, index) => {
        return (
          <div className="update" key={index}>
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
*/}
{/*Descomentar todo el párrafo línea en caso de que se requiera hacer un mapeo de la informacion con las etiquetas de las llaves*/}

return (
  <div className="Updates">
    {/* Mapeo de los datos existentes */}
      {UpdatesData.map((update, index) => {
      return (
        <div className="update" key={index}>
          <img src={update.img} alt="profile" />
          <div className="noti">
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="mensajerobotics">{update.mensaje}</span>
            </div>
          </div>
        </div>
      );
     })}

{/* Caja de texto editable (input) */}
      <input
        className="mensaje"
        type="text"
        value={textInput}
        onChange={handleInputChange}
        placeholder="Escribe tu mensaje..."
      />

      {/* Botón de enviar */}
      <button className="botonenviar" onClick={handleEnviarClick}>Enviar</button>
    </div>
  );
};

export default Updates;
