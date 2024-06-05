import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Menu.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';
import BotonPagar from './BotonPagar';

const MenuCarnes = () => {
    const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext); // Usamos el contexto para acceder al carrito

    const comidasDeCarne = [
        { nombre: "Filete de res", imagen: "/Image/Res.jpg", precio: 10000, descripcion: "Delicioso filete de res a la parrilla con un toque de especias." },
        { nombre: "Costillas de cerdo", imagen: "/Image/Costilla.jpg", precio: 12000, descripcion: "Costillas de cerdo marinadas y cocidas a la perfección." },
        { nombre: "Carne BBQ", imagen: "/Image/CareBBQ.jpg", precio: 9000, descripcion: "Jugosa Carne BBQ con un toque picante." }
    ];

    return (
        <div className="menu-carnes-container">
            <h2 className="titulo-menu">Menú de Carnes</h2>
            <div className="lista-comidas">
                {comidasDeCarne.map((comida, index) => (
                    <div key={index} className="comida">
                        <div className="imagen-comida">
                            <img src={comida.imagen} alt={comida.nombre} />
                        </div>
                        <div className="detalles-comida">
                            <h3>{comida.nombre}</h3>
                            <p className="descripcion-comida">{comida.descripcion}</p>
                            <p>Precio: ${comida.precio}</p>
                            <button onClick={() => agregarAlCarrito(comida)} className="btn-agregar">Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carrito-compras">
                <h2>Carrito de compras</h2>
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index} className="item-carrito">
                            <span>{item.nombre} - ${item.precio}</span>
                            <button onClick={() => eliminarDelCarrito(index)} className="btn-eliminar">Eliminar</button>
                            
                        </li>
                        
                    ))}
                    <BotonPagar />
                </ul>
            </div>
            <div className="botones-navegacion">
                <Link to="/pantalla" className="boton-navegacion"> Volver al inicio</Link>
                <Link to="/rapidas" className="boton-navegacion">Siguiente categoría: Comidas rápidas</Link>
            </div>
        </div>
    );
    
};


export default MenuCarnes;

