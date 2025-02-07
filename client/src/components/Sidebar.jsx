import { Link } from "react-router-dom"
import Button from "./Button"
import useAuthStore from "../stores/useAuthStore"
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";



const Sidebar = ({ nav }) => {

    const { logoutUser } = useAuthStore()
    const [toggleMenu, setToggleMenu] = useState(true)

    const onToggleSidebar = () => {
        setToggleMenu(!toggleMenu)
    }

    const onLogout = async () => {
        await logoutUser()
    }

    return (
        <aside className={`hidden md:block relative transition-all ${toggleMenu ? "w-80 pr-14" : "w-0 pr-5"} min-h-dvh bg-emerald-700 p-2`}>
            <button onClick={onToggleSidebar} className={`transition-all absolute ${toggleMenu ? "right-2" : "-right-2 rotate-180"} top-15 text-white bg-emerald-700 hover:bg-emerald-600 rounded-full border border-white/30 cursor-pointer text-sm p-2`}><GrPrevious /></button>
            <div className={`w-40 transition-transform ${toggleMenu ? "translate-x-0" : "-translate-x-64"}`}>
                <Link to="/" className="block text-2xl text-white mb-6">Estadio Municipal de Chonchi</Link>
                <Button type="link" onClick="/reservaciones/crear" text="Crear reservación" />
                <ul className="text-emerald-100 mt-6">
                    {nav.map((item, index) => (
                        <li className="hover:text-white mb-2" key={index}><Link to={item.to}>{item.label}</Link></li>
                    ))}
                </ul>
                <button onClick={onLogout} className="mt-6 underline cursor-pointer text-emerald-100 hover:text-white">Cerrar sesión</button>
            </div>
        </aside>
    )
}

export default Sidebar