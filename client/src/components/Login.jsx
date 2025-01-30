import bg from '../assets/estadio.png'
import Button from './ui/Button'
import Input from './ui/Input'

const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "top" }} className="min-h-dvh">
            <div className='absolute inset-0 bg-teal-950/50 flex items-center justify-center'>
                <form className="bg-white/20 text-white w-72 rounded py-5 p-10 flex flex-col gap-2">
                    <Input
                        name="username"
                        label="Nombre de usuario"
                    />
                    <Input
                        name="password"
                        type='password'
                        label="Contraseña"
                    />
                    <div className='mt-4'>
                        <Button text="Iniciar sesión" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login