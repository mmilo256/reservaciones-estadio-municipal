import { Navigate } from 'react-router-dom'
import bg from '../assets/estadio.png'
import LoginForm from '../forms/login/LoginForm'
import useAuthStore from '../stores/useAuthStore'

const Login = () => {

    const { isAuthenticated } = useAuthStore()

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "top" }} className="min-h-dvh">
            <div className='absolute inset-0 bg-teal-950/50 flex items-center justify-center'>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login