// src/All/Pantalla.js
import React from 'react';
import Navbar from './Navbar';
import './Pantalla.css';

const Pantalla = () => {
    return (
        <div>
            
            <Navbar /> 
            <section className="main-content">
                <div className="hero">
                
                    <h1>Bienvenido a Restaurante JAM Delights</h1>
                </div>
            </section>
        </div>
    );
};

export default Pantalla;
