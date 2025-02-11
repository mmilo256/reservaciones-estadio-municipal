import { useState } from "react"
import Container from "./Container"
import { Link } from "react-router-dom"
import Button from "./Button"
import { IoMenu } from "react-icons/io5";
import useAuthStore from "../stores/useAuthStore";

const Navbar = ({ title, nav }) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const { logoutUser } = useAuthStore()

    const onLogout = async () => {
        await logoutUser()
    }

    const onToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav className="sticky top-0 z-50 bg-emerald-700 text-white md:bg-white md:text-black border-b border-b-slate-200 h-12">
                <Container className="flex items-center justify-between h-full">
                    <button onClick={onToggleMenu} className="md:hidden border border-emerald-800 rounded h-8 w-8 flex items-center justify-center"> <IoMenu size={40} /> </button>
                    <p className="text-dark text-center md:text-left font-semibold text-lg">{title}</p>
                </Container>
            </nav>
            {toggleMenu && <div onClick={onToggleMenu} className="fixed bottom-0 top-12 left-0 right-0 bg-black/50 z-50">
                <ul className="block md:hidden bg-emerald-700 h-full max-w-60 px-3 pt-4 border-r border-r-emerald-800">
                    <Link to="/" className="block text-xl text-white">Estadio Municipal de Chonchi</Link>
                    <div className="py-6">
                        <Button type="link" onClick="/reservaciones/crear" text="Crear reservación" />
                    </div>
                    {nav.map((item, index) => (
                        <li key={index}><Link className="block text-white mb-1 py-2" to={item.to}>{item.label}</Link></li>
                    ))}
                    <button onClick={onLogout} className="mt-6 underline cursor-pointer text-emerald-100 hover:text-white">Cerrar sesión</button>
                </ul>
            </div>}
        </>
    )
}

export default Navbar