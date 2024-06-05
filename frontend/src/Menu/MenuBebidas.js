import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Menu.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

const MenuBebidas = () => {
    const { carrito, agregarAlCarrito, eliminarDelCarrito } = useContext(CartContext);

    const bebidas = [
        { nombre: "Malteada de Fresa", imagen: "/MenuImage/Malte.jpg", precio: 3000, descripcion: "Refresco clásico con burbujas y sabor a cola." },
        { nombre: "Jugo de Naranja", imagen: "/MenuImage/jugoN.jpg", precio: 2000, descripcion: "Jugo natural exprimido de naranjas frescas." },
        { nombre: "Café", imagen: "/MenuImage/cafe.jpg", precio: 2500, descripcion: "Café caliente y aromático, perfecto para empezar el día." }
    ];

    return (
            <div className="menu-carnes-container">
                <h2 className="titulo-menu">Menú de Carnes</h2>
                <div className="lista-comidas">
                    {bebidas.map((comida, index) => (
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
                <Link to="/rapidas" className="boton-navegacion">Volver a Categoria Rapidas</Link>
                <Link to="/postres" className="boton-navegacion">Ir a Categoria Postres</Link>
            </div>
        </div>
    );
};

export default MenuBebidas;
