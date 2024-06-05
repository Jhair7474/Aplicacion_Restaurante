import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Menu.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const MenuPostres = () => {
    const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext);

    const postres = [
        { nombre: "Pastel de Chocolate", imagen: "/MenuImage/ChocolateP.jpg", precio: 5000, descripcion: "Delicioso pastel de chocolate cubierto con ganache." },
        { nombre: "Helado de Vainilla", imagen: "/MenuImage/Helado.jpg", precio: 3500, descripcion: "Helado suave y cremoso con sabor a vainilla." },
        { nombre: "Tiramisú", imagen: "/MenuImage/Tiramisu.jpg", precio: 6000, descripcion: "Postre italiano con capas de bizcocho, café y crema de mascarpone." }
    ];

    return (
        <div className="menu-carnes-container">
            <h2 className="titulo-menu">Menú de Carnes</h2>
            <div className="lista-comidas">
                {postres.map((comida, index) => (
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
                </ul>
            </div>
            <div className="botones-navegacion">
            <Link to="/pantalla" className="boton-navegacion"> Volver al inicio</Link>
                <Link to="/bebidas" className="boton-navegacion">Volver a Categoria Bebidas</Link>
            </div>
        </div>
    );
};

export default MenuPostres;
