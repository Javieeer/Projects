import React from 'react';
import './SobreNosotros.css';
import Empleado from './Empleado';

function SobreNosotros({ empleados, descripcionEmpresa, logos }) {
  return (
    <div className="sobre-nosotros">
      <h2>Sobre Nosotros</h2>

      {/* Sección de empleados */}
      <div className="empleados">
        {empleados.map((empleado, index) => (
          <Empleado 
            key={index}
            imgSrc={empleado.imgSrc}
            nombre={empleado.nombre}
            cargo={empleado.cargo}
            experiencia={empleado.experiencia}
            titulo={empleado.titulo}
          />
        ))}
      </div>

      {/* Descripción de la empresa */}
      <div className="descripcion-empresa">
        <h3>Descripción de la Empresa</h3>
        <p>{descripcionEmpresa}</p>
      </div>

      {/* Sección de logos */}
      <div className="logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="logo" />
        ))}
      </div>
    </div>
  );
}

export default SobreNosotros;
