import e from 'express'
import {
    actualizarReservacion,
    crearReservacion,
    eliminarReservacion,
    obtenerReservaciones,
    obtenerReservacionPorId
} from '../controllers/ReservacionController.js'

const router = e.Router()

router.post("/", crearReservacion)
router.get("/", obtenerReservaciones)
router.get("/:id", obtenerReservacionPorId)
router.patch("/:id", actualizarReservacion)
router.delete("/:id", eliminarReservacion)

export default router