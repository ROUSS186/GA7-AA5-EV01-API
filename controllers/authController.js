// Importar el modelo Usuario
const Usuario = require("../models/usuario");

// Lista en memoria para almacenar los usuarios registrados
const usuarios = [];

/**
 * Registrar un nuevo usuario
 */
const registrar = (req, res) => {

    const { usuario, password } = req.body;

    // Validar que los datos existan
    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: "Debe ingresar usuario y contraseña"
        });
    }

    // Verificar si el usuario ya existe
    const existe = usuarios.find(u => u.usuario === usuario);

    if (existe) {
        return res.status(400).json({
            mensaje: "El usuario ya existe"
        });
    }

    // Crear el usuario
    const nuevoUsuario = new Usuario(usuario, password);

    usuarios.push(nuevoUsuario);

    return res.status(201).json({
        mensaje: "Usuario registrado correctamente"
    });

};

/**
 * Iniciar sesión
 */
const login = (req, res) => {

    const { usuario, password } = req.body;

    // Buscar el usuario
    const encontrado = usuarios.find(
        u => u.usuario === usuario && u.password === password
    );

    if (encontrado) {

        return res.json({
            mensaje: "Autenticación satisfactoria"
        });

    }

    return res.status(401).json({
        mensaje: "Error en la autenticación"
    });

};

// Exportar funciones
module.exports = {
    registrar,
    login
};