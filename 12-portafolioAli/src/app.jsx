import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import ImageSlider from './componentes/imageSlider';
import VideoSlider from './componentes/videoSlider';
import ProyectoGeneral from './componentes/generalProjects';
import SobreNosotros from './componentes/sobreNosotros';
import ContactBody from './componentes/contacto'

import img1 from '../public/img/img1.png';
import img2 from '../public/img/img2.jpg';
import img3 from '../public/img/img3.png';
import img4 from '../public/img/img4.jpg';
import img5 from '../public/img/img5.png';
import img6 from '../public/img/img6.png';
import img7 from '../public/img/img7.jpg';
import img8 from '../public/img/img8.jpg';
import vid1 from '../public/img/vid1.mp4';
import img100 from '../public/img/img100.png'
import img101 from '../public/img/img101.png';
import img102 from '../public/img/img102.png';
import img103 from '../public/img/img103.png';
import img104 from '../public/img/img104.png';
import img105 from '../public/img/img105.png';
import img106 from '../public/img/img106.png';
import img107 from '../public/img/img107.png';
import img108 from '../public/img/img108.png';
import img109 from '../public/img/img109.png';
import img110 from '../public/img/img110.png';
import img111 from '../public/img/img111.png';
import img112 from '../public/img/img112.png';
import img200 from '../public/img/img200.png';
import img201 from '../public/img/img201.png';


const proyectos = {
  urbanos: [
    /* Cumbres del sur - Vivienda en altura */
    { imgSrc: img1, title: 'Cumbres del sur', description: 'Descripción del proyecto urbano 1', location: 'Ibagué', price: '$175.500.000' },
    /* Renova vista */
    { imgSrc: img2, title: 'Renova vista', description: 'Descripción del proyecto urbano 2' },
    /* Mobiliario */
    { imgSrc: img3, title: 'Mobiliario', description: 'Descripción del proyecto urbano 3' },
    /* Expresión 3D */
    { imgSrc: img4, title: 'Expresión 3D', description: 'Descripción del proyecto urbano 4' },
    /* Estación 21 */
    { imgSrc: img8, title: 'Estación 21', description: 'Descripción del proyecto urbano 4' },
  ],
  campestres: [
    /* Villa Linéa */
    { 
      imgSrc: img5, 
      seccion1: {
        titulo: 'VILLA LINÉA', 
        subtitulo: 'Vivienda Unifamiliar para Kandinsky', 
        descripcion: 'Es un proyecto de vivienda unifamiliar desarrollado en el Taller 3, inspirado en el renombrado artista abstracto Wassily Kandinsky. Este proyecto buscó reflejar los gustos y necesidades de Kandinsky, utilizando sus obras como base conceptual. El diseño se caracteriza por formas geométricas, colores vibrantes y espacios abiertos, creando un ambiente que fomenta la creatividad y la inspiración artística. La Villa Línea no solo fue un ejercicio de diseño arquitectónico, sino también una exploración de cómo los conceptos artísticos pueden integrarse en la arquitectura, proporcionando valiosas lecciones sobre el diseño centrado en el usuario y la creatividad en la vivienda.'
      }, 
      seccion2: {
        imga: img100,
        descripcion: 'El vestíbulo central de la casa actúa como un núcleo armonioso y acogedor, desde el cual se distribuyen las diversas zonas del hogar. Este espacio no solo facilita la circulación, sino que también establece el tono estético y funcional de la residencia', 
        alcance: 'Academico', 
        modelado: 'Sketchup', 
        render: 'Lumion',
      }, 
      seccion3: {
        titulo: 'AMBIENTACIÓN DE PLANTAS',
        imga: img101,
        imgb: img102,
        dibujo: 'AutoCAD',
        edicion: 'Photoshop',
        descripcion: 'En este estilo de ambientación se opta por editar todas las zonas exteriores del proyecto, mientras que el interior se mantiene con la expresión técnica inicial',
      },
      seccion4: {
        titulo: 'RENDER TIPO MAQUETA',
        imga: img103,
        descripcion: 'Este render tipo maqueta en blanco destaca la claridad del diseño, permitiendo una facil comprensión de la forma y la estructura sin distracciones de color o materiales. La iluminación y las sombras están trabajadas cuidadosamente, resaltando la volumetría y la profundidad del proyecto.',
        render: 'V-ray',
      } 
    },
    /* Kotkin box */
    { 
      imgSrc: img6, 
      seccion1: {
        titulo: 'KOTKIN BOX', 
        subtitulo: 'Vivienda Unifamiliar para David Copperfield', 
        descripcion: 'Desarrollado en el taller de diseño 3, en este se buscaba diseñar una vivienda unifamiliar que se adaptara a las características y necesidades de determinado personaje. En este proyecto la inclinación que presenta el terreno en el cual se desarrolla el proyecto, es un factor que juega a favor en muchos aspectos, ya que con el fin de lograr adaptarse a la topografía se dispone la vivienda en distintos niveles y así mismo a nivel compositivo se propone un juevo volumétrico más llamativo.'
      }, 
      seccion2: {
        imga: img107,
        descripcion: 'El vestíbulo central de la casa actúa como un núcleo armonioso y acogedor, desde el cual se distribuyen las diversas zonas del hogar. Este espacio no solo facilita la circulación, sino que también establece el tono estético y funcional de la residencia', 
        alcance: 'Academico', 
        modelado: 'Sketchup', 
      },
      seccion3: {
        titulo: 'AMBIENTACIÓN DE PLANTAS',
        imga: img104,
        imgb: img105,
        dibujo: 'AutoCAD',
        edicion: 'Photoshop',
        descripcion: 'En este estilo de ambientación se opta por editar todas las zonas exteriores del proyecto, mientras que el interior se mantiene con la expresión técnica inicial',
      },
      seccion4: {
        titulo: 'RENDER TIPO MAQUETA',
        imga: img106,
        descripcion: 'Este render tipo maqueta en blanco destaca la claridad del diseño, permitiendo una facil comprensión de la forma y la estructura sin distracciones de color o materiales. La iluminación y las sombras están trabajadas cuidadosamente, resaltando la volumetría y la profundidad del proyecto.',
        render: 'V-ray',
      } 
    },
    /* Proyecto el triunfo */
    { 
      imgSrc: img3, 
      seccion1: {
        titulo: 'PROYECTO EL TRIUNFO', 
        subtitulo: 'Ubicado en San Sebastian, Mariquita - Tolima', 
        descripcion: 'El cliente solicitó la visualización de un proyecto de parcelación y loteo de viviendas, incluyendo el diseño y presentación de una casa para la venta. Se desarrollaron renders detallados del entorno y de la casa modelo, destacando su confort y estilo, con el objetivo de apoyar la preventa del proyecto.'
      }, 
      seccion2: {
        imga: img108,
        descripcion: 'Puedes hacer el recorrido virtual del proyecto escaneando este codigo QR', 
        alcance: 'Laboral', 
        modelado: 'Sketchup', 
      },
      seccion3: {
        titulo: 'AMBIENTACIÓN DE PLANTAS',
        imga: img109,
        imgb: img110,
        dibujo: '',
        edicion: '',
        descripcion: '',
      },
    },
    /* Mirador campestre */
    { 
      imgSrc: img1, 
      seccion1: {
        titulo: 'MIRADOR CAMPESTRE', 
        subtitulo: 'Ubicado en San Sebastian, Mariquita - Tolima', 
        descripcion: 'El cliente solicitó la visualización de un proyecto de parcelación y loteo de gran magnitud para viviendas, presentando una variedad de casas para la venta. Se realizaron renders detallados del entorno y de las distintas opciones de vivienda, destacando su confort y estilo, con el objetivo de apoyar la comercialización del proyecto.'
      }, 
      seccion2: {
        imga: img108,
        descripcion: 'Puedes hacer el recorrido virtual del proyecto escaneando este codigo QR', 
        alcance: 'Laboral', 
        modelado: 'Sketchup', 
      },
      seccion3: {
        titulo: 'AMBIENTACIÓN DE PLANTAS',
        imga: img111,
        imgb: img112,
        dibujo: '',
        edicion: '',
        descripcion: '',
      },
    },
  ],
  turisticos: [
    
  ],
};

const empleados = [
  {
    imgSrc: img200,
    nombre: 'Camilo Andres Gonzales Fereira',
    cargo: 'Ayudante',
    experiencia: '4 años en diseño',
    titulo: 'Estudiante de Arquitectura',
  },
  {
    imgSrc: img201,
    nombre: 'Alison Jimena Mendoza Prieto',
    cargo: 'Diseñadora',
    experiencia: '4 años en diseño',
    titulo: 'Arquitecta',
  },
  // Añadimos más empleados si es necesario
];

const descripcionEmpresa = 'Bienvenidos al portafolio de estudio 4A. Somos una emergente marca dedicada al diseño y visualización de proyectos arquitectonicos, mostrando la calidad y pulcritud en cada uno de ellos. Este portafolio incluye trabajos universitarios y así mismo externos que abarcan el desarrollo de planos técnicos y ambientados, modelado 3D, y renderizado de proyectos en recorridos virtuales e imagenes render.';

const logos = [
  { src: 'URL_DEL_LOGO1', alt: 'Logo del Programa 1' },
  { src: 'URL_DEL_LOGO2', alt: 'Logo del Programa 2' },
  // Añadimos los logos que nos pegue en gana :v
];

function Home() {
  return (
    <div>
      <ImageSlider
        textoGris='Urbana'
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
      <ImageSlider
        textoGris='Campestre'
        img1={img5}
        img2={img6}
        img3={img7}
        img4={img8}
      />
      <VideoSlider
        textoGris='Turística'
        videoSrc={vid1}
      />
    </div>
  );
}

function Proyectos() {
  const location = useLocation();
  const path = location.pathname.replace('/proyectos/', '') || 'generales';

  // Mostrar los proyectos generales si la ruta es 'generales'
  const proyectosParaMostrar = path === 'generales' 
    ? Object.values(proyectos).flat() // Combina todos los proyectos en un solo array
    : proyectos[path] || []; // Muestra la categoría específica si no es 'generales'

  if (!proyectos[path] && path !== 'generales') {
    return <Navigate to="/proyectos/generales" />;
  }

  // Títulos para las diferentes vistas
  const titles = {
    urbanos: 'Arquitectura Urbana',
    campestres: 'Arquitectura Campestre',
    turisticos: 'Arquitectura Turística',
    generales: 'Todos los proyectos',
  };

  const title = titles[path] || 'Proyectos';

  const [selectedProyecto, setSelectedProyecto] = useState(null);

  const handleProyectoClick = (proyecto) => {
    setSelectedProyecto(proyecto);
  };

  const handleCloseDetails = () => {
    setSelectedProyecto(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseDetails();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="proyectos-container">
      <h1 className="section-title">{title}</h1>
      <ProyectoGeneral
        proyectos={proyectosParaMostrar}
        onProyectoClick={handleProyectoClick}
        selectedProyecto={selectedProyecto}
        onCloseDetails={handleCloseDetails}
      />
    </div>
  );
}

function Nosotros() {
  return (
    <div>
      <SobreNosotros 
        empleados={empleados}
        descripcionEmpresa={descripcionEmpresa}
        logos={logos}
      />
    </div>
  )
}

function Contacto() {
  return (
    <div>
      <ContactBody />
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />}>
            <Route path="/proyectos/urbanos" element={<Proyectos />} />
            <Route path="/proyectos/campestres" element={<Proyectos />} />
            <Route path="/proyectos/turisticos" element={<Proyectos />} />
            <Route path="/proyectos/generales" element={<Proyectos />} />
          </Route>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;