import Jwt from 'jsonwebtoken'
import config from '../config/config.js'

const { jwtSecret } = config

export const generarTokenJWT = payload => {
    return Jwt.sign(payload, jwtSecret, { expiresIn: "8h" })
}

export const verificarTokenJWT = token => {
    try {
        return Jwt.verify(token, jwtSecret)
    } catch (error) {
        return null
    }
}