import e from 'express'
import { cerrarSesion, iniciarSesion, registrarUsuario, verificarAutenticacion } from '../controllers/UsuarioController.js'
import { verificarToken } from '../middlewares/authMiddleware.js'

const router = e.Router()

router.post("/register", registrarUsuario)
router.post("/login", iniciarSesion)
router.post("/logout", verificarToken, cerrarSesion)
router.get("/check", verificarToken, verificarAutenticacion)

export default router