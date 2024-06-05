const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_restaurante1'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.post('/registro', (req, res) => {
    const { nombre, apellido, email, password } = req.body;

    // Por defecto, asignamos el rol de usuario (id_Rol = 2)
    const id_Rol = 2;

    db.query('INSERT INTO usuarios (nombre, apellido, email, password, id_Rol) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, email, password, id_Rol], (err, results) => {
        if (err) {
            console.error("Error al registrar usuario:", err);
            return res.status(500).send('Error al registrar usuario');
        }
        console.log("Usuario registrado exitosamente");
        res.status(201).send('Usuario registrado exitosamente');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT id_Usuarios FROM usuarios WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
            console.error("Error al intentar iniciar sesión:", err);
            return res.status(500).send('Error al intentar iniciar sesión');
        }
        if (results.length === 0) {
            return res.status(400).send('Credenciales incorrectas');
        }

        const userId = results[0].id_usuarios;
        console.log("Inicio de sesión exitoso");
        res.status(200).json({ userId });
    });
});



app.post('/reserva', (req, res) => {
    const { id_Usuarios, fecha, id_MetodoPago, num_mesa } = req.body;

    // Validar que el número de mesa esté entre 1 y 10
    if (num_mesa < 1 || num_mesa > 10) {
        return res.status(400).send('El número de mesa debe estar entre 1 y 10');
    }

    // Verificar que la mesa esté disponible para la fecha especificada
    db.query('SELECT * FROM reserva WHERE num_mesa = ? AND fecha = ?', [num_mesa, fecha], (err, results) => {
        if (err) {
            console.error("Error al verificar la disponibilidad de la mesa:", err);
            return res.status(500).send('Error al crear la reserva');
        }

        if (results.length > 0) {
            // La mesa ya está reservada para la fecha especificada
            return res.status(400).send('Mesa no Disponible, Elija otra por favor');
        }

        // Si la mesa está disponible, procedemos con la reserva
        db.query('INSERT INTO reserva (id_usuarios, fecha, id_metodopago, num_mesa) VALUES (?, ?, ?, ?)', [id_Usuarios, fecha, id_MetodoPago, num_mesa], (err, result) => {
            if (err) {
                console.error("Error al insertar en la tabla reserva:", err);
                return res.status(500).send('Error al crear la reserva');
            }

            const id_reserva = result.insertId;

            db.query('SELECT usuarios.email, reserva.fecha, reserva.id_metodopago, reserva.num_mesa  FROM reserva JOIN usuarios ON reserva.id_usuarios = usuarios.id_Usuarios WHERE reserva.id_reserva = ?', [id_reserva], (err, results) => {
                if (err) {
                    console.error("Error al obtener los detalles de la reserva:", err);
                    return res.status(500).send('Error al obtener los detalles de la reserva');
                }

                const reservaDetails = results[0];
                console.log("Reserva creada exitosamente");
                res.status(201).json(reservaDetails);
            });
        });
    });
});


// Ruta para crear un pedido
app.post('/pedido', (req, res) => {
    const { id_MetodoPago, Observacion, Pedido_Fecha, id_PedidoDomicilio, id_Usuarios, id_Producto, Cantidad } = req.body;

    db.query(
        'INSERT INTO pedido (id_MetodoPago, Observacion, Pedido_Fecha, id_PedidoDomicilio, id_Usuarios, id_Producto, Cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id_MetodoPago, Observacion, Pedido_Fecha, id_PedidoDomicilio, id_Usuarios, id_Producto, Cantidad],
        (err, results) => {
            if (err) {
                console.error("Error al crear el pedido:", err);
                return res.status(500).send('Error al crear el pedido');
            }
            console.log("Pedido creado exitosamente");
            res.status(201).send('Pedido creado exitosamente');
        }
    );
});


// Obtener todos los Pedidos
app.get('/pedidos', (req, res) => {
    db.query('SELECT * FROM pedido', (err, results) => {
        if (err) {
            console.error("Error al obtener los pedidos:", err);
            return res.status(500).send('Error al obtener los pedidos');
        }
        res.status(200).json(results);
    });
});

// Obtener Pedido por ID
app.get('/pedido/:id', (req, res) => {
    const { id } = req.params;

    db.query('SELECT * FROM pedido WHERE id_Pedido = ?', [id], (err, results) => {
        if (err) {
            console.error("Error al obtener el pedido:", err);
            return res.status(500).send('Error al obtener el pedido');
        }
        if (results.length === 0) {
            return res.status(404).send('Pedido no encontrado');
        }
        res.status(200).json(results[0]);
    });
});

// Actualizar Pedido
app.put('/pedido/:id', (req, res) => {
    const { id } = req.params;
    const { id_MetodoPago, Observacion, Pedido_Fecha, id_PedidoDomicilio, id_Usuarios, id_Producto, Cantidad } = req.body;

    db.query(
        'UPDATE pedido SET id_MetodoPago = ?, Observacion = ?, Pedido_Fecha = ?, id_PedidoDomicilio = ?, id_Usuarios = ?, id_Producto = ?, Cantidad = ? WHERE id_Pedido = ?',
        [id_MetodoPago, Observacion, Pedido_Fecha, id_PedidoDomicilio, id_Usuarios, id_Producto, Cantidad, id],
        (err, results) => {
            if (err) {
                console.error("Error al actualizar el pedido:", err);
                return res.status(500).send('Error al actualizar el pedido');
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Pedido no encontrado');
            }
            console.log("Pedido actualizado exitosamente");
            res.status(200).send('Pedido actualizado exitosamente');
        }
    );
});

// Eliminar Pedido
app.delete('/pedido/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM pedido WHERE id_Pedido = ?', [id], (err, results) => {
        if (err) {
            console.error("Error al eliminar el pedido:", err);
            return res.status(500).send('Error al eliminar el pedido');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Pedido no encontrado');
        }
        console.log("Pedido eliminado exitosamente");
        res.status(200).send('Pedido eliminado exitosamente');
    });
});

app.get('/categorias', (req, res) => {
    db.query('SELECT * FROM categoria', (err, results) => {
        if (err) {
            console.error("Error al obtener las categorías:", err);
            return res.status(500).send('Error al obtener las categorías');
        }
        res.status(200).json(results);
    });
});

// Ruta para obtener productos por categoría
app.get('/productos/:idCategoria', (req, res) => {
    const { idCategoria } = req.params;

    db.query('SELECT * FROM producto WHERE id_Categoria = ?', [idCategoria], (err, results) => {
        if (err) {
            console.error("Error al obtener los productos:", err);
            return res.status(500).send('Error al obtener los productos');
        }
        res.status(200).json(results);
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
