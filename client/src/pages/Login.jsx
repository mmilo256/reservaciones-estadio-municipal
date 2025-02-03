import bg from '../assets/estadio.png'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "top" }} className="min-h-dvh">
            <div className='absolute inset-0 bg-teal-950/50 flex items-center justify-center'>
                <form className="bg-slate-200/20 text-white w-72 p-5 flex flex-col gap-2">
                    <h2 className='text-2xl font-light text-center border-b border-b-white/30 pb-4'>Estadio Municipal de Chonchi</h2>
                    <Input
                        name="username"
                        label="Nombre de usuario"
                        placeholder="usuario465"
                    />
                    <Input
                        name="password"
                        type='password'
                        label="Contraseña"
                        placeholder="*********"
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