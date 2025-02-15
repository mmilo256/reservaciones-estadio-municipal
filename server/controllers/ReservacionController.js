import { Op } from "sequelize"
import Reservacion from "../models/ReservacionModel.js"
import logger from "../config/winston.js"


// Obtener una reservación según su ID
export const obtenerReservacionPorId = async (req, res) => {
    const { id } = req.params
    try {
        const reservacion = await Reservacion.findByPk(id)
        res.status(200).json({ message: "Se han obtenido la reservación", reservacion })
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo obtener la reservación. ${error.message}` })
    }
}

// Actualizar una reservación existente
export const actualizarReservacion = async (req, res) => {
    try {
        const {
            actividad,
            organizacion,
            nombre_solicitante,
            correo_solicitante,
            telefono_solicitante,
            fecha_actividad,
            hora_inicio,
            hora_termino,
            estado } = req.body

        // Verificar que la reservación exista en base de datos
        const { id } = req.params
        const reservacion = await Reservacion.findByPk(id)
        if (!reservacion) {
            return res.status(404).json({ error: true, message: "La reservación no existe en el sistema" })
        }

        // Modificar reservación
        const updates = {}
        if (actividad) updates.actividad = actividad
        if (organizacion) updates.organizacion = organizacion
        if (nombre_solicitante) updates.nombre_solicitante = nombre_solicitante
        if (correo_solicitante) updates.correo_solicitante = correo_solicitante
        if (telefono_solicitante) updates.telefono_solicitante = telefono_solicitante
        if (fecha_actividad) updates.fecha_actividad = fecha_actividad
        if (hora_inicio) updates.hora_inicio = hora_inicio
        if (hora_termino) updates.hora_termino = hora_termino
        if (estado) updates.estado = estado
        await reservacion.update(updates)
        const { usuario } = req.user
        logger.info(`El usuario ${usuario} modificó la reservación #${id}`)
        res.status(203).json({ message: "La reservación se ha modificado exitosamente.", reservacion })
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo borrar la reservación. ${error.messages}` })
    }
}

// Eliminar una reservación existente
export const eliminarReservacion = async (req, res) => {
    try {
        // Verificar que la reservación exista en base de datos
        const { id } = req.params
        const reservacion = await Reservacion.findByPk(id)
        if (!reservacion) {
            return res.status(404).json({ error: true, message: "La reservación no existe en el sistema" })
        }

        // Borrar reservación
        await reservacion.destroy()
        res.status(203).send()
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo borrar la reservación. ${error.messages}` })
    }

}

// Crear una reservación
export const crearReservacion = async (req, res) => {
    try {
        const {
            actividad,
            organizacion,
            nombre_solicitante,
            correo_solicitante,
            telefono_solicitante,
            fecha_actividad,
            hora_inicio,
            hora_termino
        } = req.body

        // Validar que se hayan proporcionado todos los datos
        if (
            !actividad ||
            !organizacion ||
            !nombre_solicitante ||
            !fecha_actividad ||
            !hora_inicio ||
            !hora_termino
        ) {
            return res.status(400).json({ error: true, message: "No se han proporcionado todos los datos" })
        }

        // Crear reservación en base de datos
        const reservacion = await Reservacion.create({
            actividad,
            organizacion,
            nombre_solicitante,
            correo_solicitante,
            telefono_solicitante,
            fecha_actividad,
            hora_inicio,
            hora_termino,
            estado: "activa"
        })
        const { usuario } = req.user
        console.log(reservacion)
        logger.info(`El usuario ${usuario} creó la reservación #${reservacion.id}`)
        res.status(200).json({ message: "Se ha creado la reservación.", reservacion })
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo crear la reservación. ${error.message}` })
    }
}

// Obtener todas las reservaciones
export const obtenerReservaciones = async (req, res) => {
    const { page = 1, limit = 10, start, end, status } = req.query

    const offset = (page - 1) * limit

    const whereOptions = {}

    if (start && end) {
        whereOptions.fecha_actividad = {
            [Op.between]: [start, end]
        }
    }

    if (status) {
        whereOptions.estado = status
    }

    try {
        const { count, rows } = await Reservacion.findAndCountAll({
            attributes: ["id", "organizacion", "actividad", "fecha_actividad", "hora_inicio", "hora_termino", "estado"],
            order: [["fecha_actividad", "DESC"], ["hora_inicio", "ASC"]],
            where: whereOptions,
            offset,
            limit
        })
        const totalPages = Math.ceil(count / limit)
        res.status(200).json({ count, rows, totalPages })
    } catch (error) {
        res.status(500).json({ error: true, message: `No se pudo obtener las reservaciones. ${error.message}` })
    }
}