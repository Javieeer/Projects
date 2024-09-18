import React from 'react';
import './socialCircle.css';

const getIconUrl = (socialName) => {
  return `https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${socialName}.svg`;
};

const SocialCircle = ({ name, url }) => {
  const iconUrl = getIconUrl(name);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-circle">
      <img 
        src={iconUrl} 
        alt={name} 
        className="social-icon" 
        onError={(e) => {
          // Si el ícono no se carga, mostrar un ícono de error o una imagen por defecto
          e.target.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/unknown.svg';
        }}
      />
    </a>
  );
};

export default SocialCircle;
