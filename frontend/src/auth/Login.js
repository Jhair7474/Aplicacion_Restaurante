// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const { userId } = response.data;

            alert('Inicio de sesión exitoso');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userId', userId);  // Almacena el ID del usuario en localStorage
            navigate('/pantalla');  // Redirigimos al usuario a la pantalla después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión, por favor verifica tus credenciales');
        }
    };

    return (
        <div className="page-container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
                <p>No tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
            </div>
        </div>
    );
};

export default Login;
