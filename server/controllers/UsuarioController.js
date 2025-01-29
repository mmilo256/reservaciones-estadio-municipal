import Usuario from '../models/UsuarioModel.js';
import { encriptarPassword, verificarPassword } from '../utils/encriptacion.js';
import { generarTokenJWT } from '../utils/tokens.js';

// Cerrar sesión
export const cerrarSesion = async (req, res) => {
    try {
        const token = req.cookies['jwt']
        if (token) {
            res.clearCookie('jwt', { httpOnly: true })
        }
        res.status(200).json({ message: "Se ha cerrado la sesión correctamente" })
    } catch (error) {
        res.status(500).json({ error: true, message: "No se pudo borrar la cookie" })
    }
}

// Iniciar sesión
export const iniciarSesion = async (req, res) => {
    const { username, password } = req.body

    // Comprobar que se haya proporcionado el usuario y la contraseña
    if (!username || !password) {
        return res.status(400).json({ error: true, message: "No se proporcionaron datos" })
    }

    try {
        // Comprobar que el usuario exista en la base de datos
        const usuario = await Usuario.findOne({ where: { username } })
        if (!usuario) {
            return res.status(404).json({ error: true, message: "El usuario no existe en la base de datos" })
        }

        // Comprobar que la contraseña sea correcta
        const { salt, password: hash } = usuario
        const esValido = verificarPassword(password, salt, hash)
        if (!esValido) {
            return res.status(401).json({ error: true, message: "La contraseña es incorrecta" })
        }

        // Generar token JWT
        const payload = {
            usuario: usuario.username,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos,
            email: usuario.email
        }
        const token = generarTokenJWT(payload)

        // Guardar token en una cookie httpOnly
        res.cookie('jwt', token, { httpOnly: true })
        res.status(200).json({ message: "Se ha iniciado sesión correctamente", token })
    } catch (error) {
        res.status(500).json({ error: true, message: "No se pudo iniciar sesión" })
    }
}

// Crear un usuario en la base de datos
export const registrarUsuario = async (req, res) => {
    const {
        username,
        password,
        nombres,
        apellidos,
        email
    } = req.body

    // Comprobar que se haya proporcionado usuario y contraseña
    if (!username || !password) {
        return res.status(400).json({ error: true, message: "No se han proporcionado los datos correspondientes" })
    }

    // Comprobar que el usuario no exista en la base de datos
    try {
        const usuarioExiste = await Usuario.findOne({ where: { username } })
        if (usuarioExiste) {
            return res.status(400).json({ error: true, message: "El usuario ya existe" })
        }

        // Encriptar contraseña
        const { salt, hash } = encriptarPassword(password)

        // Guardar usuario en la base de datos
        const infoUsuario = {
            nombres,
            apellidos,
            email,
            username,
            password: hash,
            salt
        }
        const nuevoUsuario = await Usuario.create(infoUsuario)
        res.status(201).json({ message: "Usuario creado con éxito", nuevoUsuario })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: `No se pudo crear al usuario. ${error.message}` })
    }
}