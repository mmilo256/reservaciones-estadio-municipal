import { Navigate } from "react-router-dom"
import useAuthStore from "../stores/useAuthStore"

const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useAuthStore()

    if (!isAuthenticated) return <Navigate to="/login" />

    return children
}

export default PrivateRoute