import { verificarTokenJWT } from "../utils/tokens.js"

export const authMiddleware = async (req, res, next) => {
    try {
        // Comprobar si hay access token en cookies
        const token = req.cookies['jwt']
        if (!token) {
            return res.status(401).json({ error: true, message: "Acceso denegado" })
        }

        // Comprobar que el token sea válido
        const decoded = verificarTokenJWT(token)
        if (!decoded) {
            return res.status(403).json({ error: true, message: "El token no es válido" })
        }

        // Continuar con la petición
        next()
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo comprobar la sesión. ${error.message}` })
    }
}