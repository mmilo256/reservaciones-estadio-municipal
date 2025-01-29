import { DataTypes } from "sequelize";
import sequelize from "../config/database/config.js";

const Usuario = sequelize.define("usuarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
})

export default Usuario