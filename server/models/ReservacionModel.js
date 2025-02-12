import { DataTypes } from "sequelize";
import sequelize from "../config/database/config.js";

const Reservacion = sequelize.define("reservaciones", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    actividad: DataTypes.STRING,
    organizacion: DataTypes.STRING,
    nombre_solicitante: DataTypes.STRING,
    correo_solicitante: DataTypes.STRING,
    telefono_solicitante: DataTypes.NUMBER,
    fecha_actividad: DataTypes.DATEONLY,
    hora_inicio: DataTypes.TIME,
    hora_termino: DataTypes.TIME,
    estado: DataTypes.ENUM(['activa', 'cancelada'])
})

export default Reservacion