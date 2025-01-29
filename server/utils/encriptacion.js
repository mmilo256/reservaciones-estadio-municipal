import crypto from 'node:crypto'

export const encriptarPassword = (password) => {
    const salt = crypto.randomBytes(16).toString('hex'); // Genera un salt aleatorio
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hash }
}

export const verificarPassword = (password, salt, hash) => {
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hashedPassword === hash
}