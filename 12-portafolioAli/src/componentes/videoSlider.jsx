import React, { useState } from 'react';
import './VideoSlider.css';

function VideoSlider({ textoGris, videoSrc }) {

  /* Manejadores para el boton del video */
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div
      className="contenedorvideo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="texto">
        <h1>Arquitectura</h1>
        <h1 className='complemento'>{textoGris}</h1>
      </div>
      <div className="video-container">
        <video
          src={videoSrc}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          className="video"
        />
        <button
          className={`mute-button ${isHovered ? 'visible' : ''}`}
          onClick={handleMuteToggle}
        >
          {isMuted ? 'Habilitar sonido' : 'Quitar sonido'}
        </button>
      </div>
    </div>
  );
}

export default VideoSlider;
