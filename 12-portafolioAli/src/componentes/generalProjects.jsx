import React from 'react';
import './generalProjects.css';

const ProyectoGeneral = ({ proyectos, onProyectoClick, selectedProyecto, onCloseDetails }) => {
    return (
        <div className="proyectos-container">
            {proyectos.map((proyecto) => (
                <div
                    key={proyecto.id} // Suponiendo que cada proyecto tiene un id único
                    className="proyecto-item"
                    onClick={() => onProyectoClick(proyecto)}
                >
                    <img
                        src={proyecto.imgSrc}
                        alt={`Imagen del proyecto ${proyecto.id}`}
                        aria-label={`Proyecto ${proyecto.id}`}
                        className="proyecto-image"
                    />
                    <div className="proyecto-overlay">
                        <p className="proyecto-title">{proyecto.seccion1?.titulo || 'Título no disponible'}</p>
                    </div>
                </div>
            ))}
            {selectedProyecto && (
                <div className="modal-overlay" onClick={onCloseDetails}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={onCloseDetails}>X</button>
                        <div className="seccion1">
                            <h2>{selectedProyecto.seccion1?.titulo || 'Título no disponible'}</h2>
                            <h3>{selectedProyecto.seccion1?.subtitulo || ''}</h3>
                            <p>{selectedProyecto.seccion1?.descripcion || ''}</p>
                        </div>
                        {selectedProyecto.seccion2 && (
                            <div className="seccion2">
                                <img src={selectedProyecto.seccion2.imga} alt="Imagen sección 2" />
                                <p>{selectedProyecto.seccion2.descripcion || ''}</p>
                                <p><strong>Proyecto: </strong>{selectedProyecto.seccion2.alcance || ''}</p>
                                <p><strong>Modelado: </strong>{selectedProyecto.seccion2.modelado || ''}</p>
                                <p><strong>Render: </strong>{selectedProyecto.seccion2.render || ''}</p>
                            </div>
                        )}
                        {selectedProyecto.seccion3 && (
                            <div className="seccion3">
                                <h3>{selectedProyecto.seccion3.titulo || ''}</h3>
                                <img src={selectedProyecto.seccion3.imga} alt="Imagen sección 3a" />
                                <img src={selectedProyecto.seccion3.imgb} alt="Imagen sección 3b" />
                                <p>{selectedProyecto.seccion3.descripcion || ''}</p>
                                <p><strong>Dibujo: </strong>{selectedProyecto.seccion3.dibujo || ''}</p>
                                <p><strong>Edición: </strong>{selectedProyecto.seccion3.edicion || ''}</p>
                            </div>
                        )}
                        {selectedProyecto.seccion4 && (
                            <div className="seccion4">
                                <h3>{selectedProyecto.seccion4.titulo || ''}</h3>
                                <img src={selectedProyecto.seccion4.imga} alt="Imagen sección 4" />
                                <p>{selectedProyecto.seccion4.descripcion || ''}</p>
                                <p><strong>Render: </strong>{selectedProyecto.seccion4.render || ''}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProyectoGeneral;
