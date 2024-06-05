import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [categorias, setCategorias] = useState([]); // Estado para mantener las categorías
  const [id_Usuarios] = useState(1); // Reemplaza 1 con el valor real del usuario actual

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    if (!categorias.includes(producto.categoria)) {
      setCategorias([...categorias, producto.categoria]); // Agregar la categoría si no existe en el registro
    }
  };

  return (
    <CartContext.Provider value={{ carrito, categorias, agregarAlCarrito, id_Usuarios }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
