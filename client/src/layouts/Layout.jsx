import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = ({ children, title }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full">
                <Navbar title={title} />
                {children}
            </div>
        </div>
    )
}

export default Layout