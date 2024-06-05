// src/All/AcercaDe.js
import React from 'react';
import './AcercaDe.css';
import { Link } from 'react-router-dom';

const AcercaDe = () => {
    return (
        <div className="acerca-container">
            <div className="container">
            <Link to="/pantalla" className="volver-btn">Volver al inicio</Link>
                <div className="acerca-content">
                    <h1>Acerca de Nosotros</h1>
                    <h2>Nuestra Historia</h2>
                    <p>Restaurante JAM Delights fue fundado en 2024 con la misión de ofrecer una experiencia culinaria única a nuestros clientes. Desde nuestros humildes comienzos, hemos crecido para convertirnos en uno de los destinos gastronómicos más apreciados de la ciudad.</p>
                    <h2>Misión y Visión</h2>
                    <p>Nuestra misión es proporcionar alimentos de la más alta calidad en un ambiente acogedor y familiar. Nos esforzamos por ser un referente en la industria de la restauración, innovando continuamente y superando las expectativas de nuestros clientes.</p>
                    <h2>El Equipo</h2>
                    <p>Estamos orgullosos de contar con un equipo de profesionales dedicados y apasionados por la gastronomía. Desde nuestros chefs hasta nuestro personal de servicio, cada miembro de nuestro equipo está comprometido con la excelencia y la satisfacción del cliente.</p>
                    <h2>Nuestros Valores</h2>
                    <ul>
                        <li>Calidad: Utilizamos solo los mejores ingredientes frescos y locales.</li>
                        <li>Innovación: Constantemente estamos creando nuevos y emocionantes platos.</li>
                        <li>Servicio: Nos esforzamos por ofrecer una experiencia excepcional a nuestros clientes.</li>
                        <li>Compromiso: Nos dedicamos a nuestra comunidad y a prácticas sostenibles.</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AcercaDe;
