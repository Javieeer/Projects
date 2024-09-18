import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'https://media.istockphoto.com/id/1398135990/es/foto/lujosa-mansi%C3%B3n-moderna-con-piscina.jpg?s=612x612&w=0&k=20&c=35Fh4ZuQJotGhwrVTreHdXsbXHg8K7OTm4eTOE-Iy08=',
  'https://media.istockphoto.com/id/1319742252/es/foto/dise%C3%B1o-del-hogar.jpg?s=612x612&w=0&k=20&c=MPJscpdUavR72dGy9af9jwk5TaPP-JdvFRqn4XpzRGw=',
  'https://media.istockphoto.com/id/511061090/es/foto/negocios-edificio-de-oficinas-en-londres-inglaterra.jpg?s=612x612&w=0&k=20&c=oGQEBCRRR72a00Y-ykb41ddlp_c4EaTwIs2CJ6odWb4=',
  'https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg',
];

function ImageSlider({ textoGris }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cambiar de imagen cada 3 segundos (3000 ms)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Limpiar el intervalo al desmontar el componente
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
