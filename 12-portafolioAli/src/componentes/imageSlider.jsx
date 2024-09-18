import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

function ImageSlider({ textoGris, img1, img2, img3, img4 }) {
  
  /* Cambiador de imagen */
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [img1, img2, img3, img4];
  
  /* Intervalo de cambio entre imagenes */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='contenedorslider'>
      <div className="texto">
        <h1>Arquitectura</h1>
        <h1 className='complemento'>{textoGris}</h1>
      </div>
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <a href="#"><img src={image} alt={`Slide ${index + 1}`} /></a>
            </div>
          ))}
        </div>
      </div>
      <div className="navegacion">
        {images.map((_, index) => (
          <span
            key={index}
            className={`punto ${index === currentIndex ? 'activo' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
