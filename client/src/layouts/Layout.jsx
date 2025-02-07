import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = ({ children, title }) => {

    const nav = [
        {
            label: "Calendario",
            to: "/"
        }, {
            label: "Historial de reservaciones",
            to: "/reservaciones"
        }
    ]

    return (
        <div className="flex">
            <Sidebar nav={nav} />
            <div className="w-full">
                <Navbar nav={nav} title={title} />
                {children}
            </div>
        </div>
    )
}

export default Layout