// Recibo.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Recibo.css'; // Importar el archivo CSS para el recibo

const Recibo = () => {
    const location = useLocation();
    const reservaDetails = location.state;
    const userEmail = localStorage.getItem('userEmail');

    return (
        <div className="recibo-container">
            <h1>Recibo de Reserva</h1>
            <p>Usuario: {userEmail}</p>
            <p>ID de Reserva: {reservaDetails.id_Reserva}</p>
            <p>Fecha de Reserva: {reservaDetails.fecha}</p>
            <p>Método de Pago: {reservaDetails.id_MetodoPago === 1 ? 'Efectivo' : 'Tarjeta'}</p>
            <p>Número de Mesa: {reservaDetails.num_mesa}</p>
            <p>Descargalo o toma captura para evidenciar </p>
            <p>Gracias por su atencion, ten un buen dia :3</p>
            <Link to="/pantalla" className="volver-btn">Volver al inicio</Link>
        </div>
    );
};

export default Recibo;
