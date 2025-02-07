import e from "express";
import config from './config/config.js'
import Usuario from "./models/UsuarioModel.js";
import Reservacion from "./models/ReservacionModel.js";
import UsuarioRouter from './routes/UsuarioRoutes.js'
import ReservacionRouter from './routes/ReservacionRoutes.js'
import cookieParser from "cookie-parser";
import { verificarToken } from "./middlewares/authMiddleware.js";
import cors from 'cors'

const { port } = config

const app = e()
app.use(e.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]
}))

Usuario.sync()
Reservacion.sync()

app.use("/auth", UsuarioRouter)
app.use("/api/reservaciones", verificarToken, ReservacionRouter)

app.listen(port, () => {
    console.log("Escuchando en el puerto " + port)
})
