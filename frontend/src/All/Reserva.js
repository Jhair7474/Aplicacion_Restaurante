import './Reserva.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { useNavigate, Link } from 'react-router-dom';

const Reserva = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [metodoPago, setMetodoPago] = useState(null);
    const [numeroMesa, setNumeroMesa] = useState(null);
    
    const navigate = useNavigate();

    // Obtén el ID del usuario de localStorage
    const userId = localStorage.getItem('userId');

    const opcionesMetodoPago = [
        { value: 1, label: 'Efectivo' },
        { value: 2, label: 'Tarjeta' }
    ];

    const opcionesNumeroMesa = [
        { value: 1, label: 'Mesa 1' },
        { value: 2, label: 'Mesa 2' },
        { value: 3, label: 'Mesa 3' },
        { value: 4, label: 'Mesa 4' },
        { value: 5, label: 'Mesa 5' },
        { value: 6, label: 'Mesa 6' },
        { value: 7, label: 'Mesa 7' },
        { value: 8, label: 'Mesa 8' },
        { value: 9, label: 'Mesa 9' },
        { value: 10, label: 'Mesa 10' }
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedDate || !metodoPago || !numeroMesa) {
            alert('Por favor, completa todos los campos');
            return;
        }

        const reservaData = {
            id_Usuarios: userId,
            fecha: selectedDate.toISOString().split('T')[0],
            id_MetodoPago: metodoPago.value,
            num_mesa: numeroMesa.value
        };

        try {
            const response = await fetch('http://localhost:3000/reserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reservaData)
            });

            if (response.ok) {
                const reservaDetails = await response.json();
                console.log('Reserva creada exitosamente');
                navigate('/recibo', { state: reservaDetails });
            } else {
                const errorMessage = await response.text();
                console.error('Error al crear la reserva:', errorMessage);
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <div className="reserva-container">
            <h1>Reserva tu mesa</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha de Reserva:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={new Date()}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Selecciona una fecha"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <Select
                        id="metodoPago"
                        options={opcionesMetodoPago}
                        onChange={setMetodoPago}
                        placeholder="Selecciona un método de pago"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroMesa">Número de Mesa:</label>
                    <Select
                        id="numeroMesa"
                        options={opcionesNumeroMesa}
                        onChange={setNumeroMesa}
                        placeholder="Selecciona un número de mesa"
                    />
                </div>
                <button type="submit">Reservar</button>
                <Link to="/pantalla" className="volver-btn">Volver al inicio</Link>
            </form>
        </div>
    );
};

export default Reserva;
