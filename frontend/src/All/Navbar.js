import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navigation = () => {
    const userEmail = localStorage.getItem('userEmail');
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/pantalla" className="active">Inicio</Link></li>
                    <li>
                        <Link to="#" id="menu-btn">Menú</Link>
                        <ul className="menu-options">
                            <li><Link to="/carnes">🥩 Carnes</Link></li>
                            <li><Link to="/rapidas">🍔 Comidas rápidas</Link></li>
                            <li><Link to="/bebidas">🍹 Bebidas</Link></li>
                            <li><Link to="/postres">🍨 Postres</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/reserva">Reservas</Link></li>
                    <li><Link to="/acerca-de">Acerca de</Link></li>
                    <li><Link to="/horario">Horario y ubicaciones</Link></li>
                    {userEmail && <li className="user-email">User: {userEmail}</li>}
                    <li><Link to="/logout">Logout</Link></li> {/* Agregado enlace para Logout */}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
