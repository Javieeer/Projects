import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="barranav">
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap"
            />
            <a className="Img" href="/">
                <img src="/img/logoH.ico" alt="Logo" />
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="menu-icon"></span>
                <span className="menu-icon"></span>
                <span className="menu-icon"></span>
            </button>
            <nav id="menu" className={isMenuOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/" className={currentPath === '/' ? 'active' : ''}>Inicio</Link></li>
                    <li>
                        <Link to="/proyectos" className={currentPath === '/proyectos' ? 'active' : ''}>Proyectos</Link>
                        <ul>
                            <li><Link to="/proyectos/urbanos" className={currentPath === '/proyectos/urbanos' ? 'active' : ''}>Urbanos</Link></li>
                            <li><Link to="/proyectos/campestres" className={currentPath === '/proyectos/campestres' ? 'active' : ''}>Campestres</Link></li>
                            <li><Link to="/proyectos/turisticos" className={currentPath === '/proyectos/turisticos' ? 'active' : ''}>Turísticos</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/nosotros" className={currentPath === '/nosotros' ? 'active' : ''}>Sobre nosotros</Link></li>
                    <li><Link to="/contacto" className={currentPath === '/contacto' ? 'active' : ''}>Contacto</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
