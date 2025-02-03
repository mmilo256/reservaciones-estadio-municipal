import { Link } from "react-router-dom"
import Button from "./Button"

const Sidebar = () => {

    const nav = [
        {
            label: "Inicio",
            to: "/"
        }, {
            label: "Historial de reservaciones",
            to: "/reservaciones"
        }
    ]

    return (
        <aside className="w-56 bg-emerald-700 min-h-dvh p-2">
            <Link to="/" className="block text-2xl text-white mb-6">Estadio Municipal de Chonchi</Link>
            <Button type="link" onClick="/reservaciones/crear" text="Crear reservación" />
            <ul className="text-emerald-100 mt-6">
                {nav.map((item, index) => (
                    <li className="hover:text-white mb-2" key={index}><Link to={item.to}>{item.label}</Link></li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar