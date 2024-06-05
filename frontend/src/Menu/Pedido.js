import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Pedido.css'; // Importa el archivo CSS

const Pedido = () => {
    // Obtener la fecha actual en formato YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];

    // Establecer la fecha actual como valor inicial para el estado 'fecha'
    const [fecha, setFecha] = useState(currentDate);
    const [domicilio, setDomicilio] = useState('');
    const [observacion, setObservacion] = useState('');
    const [metodoPago, setMetodoPago] = useState('');

    const { carrito } = useContext(CartContext);

    // Calcular el total a pagar sumando los precios de todos los productos
    const totalAPagar = carrito.reduce((total, producto) => total + producto.precio, 0);

    // Manejador para enviar el pedido
    const handlePagar = async () => {
        try {
            const response = await fetch('https://localhost:3000/pedidos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    metodoPago,
                    observacion,
                    fecha,
                    domicilio,
                    productos: carrito.map(producto => ({ id: producto.id, cantidad: producto.cantidad }))
                }),
            });

            if (response.ok) {
                console.log('Pedido pagado y enviado correctamente.');
                // Aquí puedes redirigir al usuario a otra página o realizar otras acciones necesarias
            } else {
                console.error('Error al enviar el pedido:', response.statusText);
                // Muestra un mensaje de error al usuario
                alert('Hubo un error al enviar el pedido. Por favor, inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            // Muestra un mensaje de error al usuario
            alert('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className="contenedor">
            <h2>Pedido</h2>
            <form>
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="domicilio-container">
                    <label htmlFor="domicilio">Domicilio:</label>
                    <select id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)}>
                        <option value="Si">Sí</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="observacion">Observación:</label>
                    <textarea id="observacion" value={observacion} onChange={(e) => setObservacion(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="metodoPago">Método de Pago:</label>
                    <select id="metodoPago" value={metodoPago} onChange={(e) => setMetodoPago(e.target.value)}>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta">Tarjeta</option>
                    </select>
                </div>
                {/* Mostrar los productos pedidos */}
                <div className="productos-pedidos">
                    <h3>Productos Pedidos</h3>
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>{producto.nombre} - ${producto.precio}</li>
                        ))}
                    </ul>
                    <p>Total a Pagar: ${totalAPagar}</p>
                </div>
                <button type="button" onClick={handlePagar}>Pagar</button>
            </form>
        </div>
    );
};

export default Pedido;
