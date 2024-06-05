import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Menu.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const MenuRapidas = () => { const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext);

    const comidasRapidas = [
        { nombre: "Hamburguesa", imagen: "/Image/Hambu.jpg", precio: 8000, descripcion: "Deliciosa hamburguesa con queso y vegetales frescos." },
        { nombre: "Hot Dog", imagen: "/Image/Hotdog.jpg", precio: 6000, descripcion: "Hot dog clásico con ketchup, mostaza y cebolla." },
        { nombre: "Pizza", imagen: "/Image/pizza.jpg", precio: 10000, descripcion: "Pizza casera con tus ingredientes favoritos." }
    ];

    return (
        <div className="menu-carnes-container">
            <h2 className="titulo-menu">Menú de Carnes</h2>
            <div className="lista-comidas">
                {comidasRapidas.map((comida, index) => (
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
            <Link to="/carnes" className="boton-navegacion">Volver a Categoria Carnes</Link>
                <Link to="/bebidas" className="boton-navegacion">Ir a Categoría Bebidas</Link>
                
            </div>
        </div>
    );
};

export default MenuRapidas;
