import Navbar from "../components/ui/Navbar"
import Sidebar from "../components/ui/Sidebar"

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