import React from 'react';
import { Link } from 'react-router-dom';

const BotonPagar = () => {
    return (
        <Link to="/pedido" className="boton-pagar">Pagar</Link>
    );
};

export default BotonPagar;
