import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Implementa la lógica de logout aquí (borrar token, limpiar sesiones, etc.)
        // Por ejemplo, si estás usando localStorage para el token:
        localStorage.removeItem('token');
        // Redirige al usuario a la página de inicio de sesión u otra página
        navigate('/login');
    }, [navigate]);

    return null; // No necesitas renderizar nada en la página de Logout
};

export default Logout;
