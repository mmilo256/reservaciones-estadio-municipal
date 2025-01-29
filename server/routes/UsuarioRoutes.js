import e from 'express'
import { cerrarSesion, iniciarSesion, registrarUsuario } from '../controllers/UsuarioController.js'

const router = e.Router()

router.post("/registrar-usuario", registrarUsuario)
router.post("/iniciar-sesion", iniciarSesion)
router.post("/cerrar-sesion", cerrarSesion)

export default router