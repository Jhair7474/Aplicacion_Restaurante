import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useLocation } from 'react-router-dom';
import './Carrito.css'; // Importa el archivo CSS

const Carrito = () => {
    const { carrito } = useContext(CartContext);
    const location = useLocation();

    // Verificar si la ruta actual corresponde a una de las rutas de los menús
    const mostrarCarrito = location.pathname.includes('/carnes') || 
                          location.pathname.includes('/rapidas') || 
                          location.pathname.includes('/bebidas') || 
                          location.pathname.includes('/postres');

    // Si la ruta actual corresponde a un menú, se muestra el carrito
    if (mostrarCarrito) {
        return (
            <div className="carrito-compras">
                <h2>Carrito de compras</h2>
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index}>{item.nombre} - ${item.precio}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        // Si la ruta actual no corresponde a un menú, no se muestra el carrito
        return null;
    }
};

export default Carrito;
