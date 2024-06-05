// src/All/HorarioYUbicaciones.js
import React from 'react';
import './HorarioYUbicaciones.css';
import { Link } from 'react-router-dom';

const HorarioYUbicaciones = () => {
    return (
        <div className="horarios-container">
            <div className="container">
                <h1>Horarios y Ubicaciones</h1>
                <section className="main-content">
                    <div className="horario">
                        <h2>Horario de Apertura</h2>
                        <p>Lunes a Viernes: 10:00 - 22:00</p>
                        <p>Sábado y Domingo: 11:00 - 23:00</p>
                    </div>
                    <div className="ubicacion">
                        <h2>Ubicaciones</h2>
                        <div className="direccion">
                            <h3>Sucursal 1</h3>
                            <p>Dirección: Calle Principal #123</p>
                            <p>Teléfono: 31382909655</p>
                        </div>
                        <div className="direccion">
                            <h3>Sucursal 2</h3>
                            <p>Dirección: Avenida Secundaria #456</p>
                            <p>Teléfono: 3138886165</p>
                            <Link to="/pantalla" className="volver-btn">Volver al inicio</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HorarioYUbicaciones;
