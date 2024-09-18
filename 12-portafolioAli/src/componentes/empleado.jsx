import React from 'react';
import './Empleado.css'; 

function Empleado({ imgSrc, nombre, cargo, experiencia, titulo }) {
  return (
    <div className="empleado">
      <img src={imgSrc} alt={`${nombre} - ${cargo}`} className="empleado-img" />
      <div className="empleado-info">
        <h3>{nombre}</h3>
        <p><strong>Cargo:</strong> {cargo}</p>
        <p><strong>Experiencia:</strong> {experiencia}</p>
        <p><strong>Título:</strong> {titulo}</p>
      </div>
    </div>
  );
}

export default Empleado;
