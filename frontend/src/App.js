import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Registro from './auth/Registro';
import Logout from './auth/Logout';
import Pantalla from './All/Pantalla'; 
import AcercaDe from './All/AcercaDe';
import HorarioYUbicaciones from './All/HorarioYUbicaciones';
import Reserva from './All/Reserva';
import Recibo from './All/Recibo';
import MenuCarnes from './Menu/MenuCarnes';
import MenuRapidas from './Menu/MenuRapidas';
import MenuBebidas from './Menu/MenuBebidas';
import MenuPostres from './Menu/MenuPostres';
import Carrito from './Menu/Carrito';
import Pedido from './Menu/Pedido';
import { CartProvider } from './Menu/CartContext';

const App = () => {
    return (
        <CartProvider>
            <div className="App">
                <Carrito />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/pantalla" element={<Pantalla />} />
                    <Route path="/reserva" element={<Reserva />} />
                    <Route path="/recibo" element={<Recibo />} />
                    <Route path="/acerca-de" element={<AcercaDe />} />
                    <Route path="/horario" element={<HorarioYUbicaciones />} />
                    <Route path="/carnes" element={<MenuCarnes />} />
                    <Route path="/rapidas" element={<MenuRapidas />} />
                    <Route path="/bebidas" element={<MenuBebidas />} />
                    <Route path="/postres" element={<MenuPostres />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/pedido" element={<Pedido />} />

                    <Route path="/" element={<Navigate to="/login" />} />

                </Routes>
                
            </div>
        </CartProvider>
    );
};

export default App;
