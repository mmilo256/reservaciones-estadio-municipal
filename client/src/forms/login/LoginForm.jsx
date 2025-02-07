import Button from "../../components/Button"
import Input from "../../components/Input"
import { useForm } from 'react-hook-form'
import { validationRules } from "../validations"
import useAuthStore from "../../stores/useAuthStore"

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginUser } = useAuthStore()

    const onSubmit = async (data) => {
        try {
            await loginUser(data)
        } catch (error) {
            console.error(error)
            alert("No se pudo iniciar sesión")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-700/60 text-white w-72 p-5 flex flex-col gap-2">
            <h2 className='text-2xl font-light text-center border-b border-b-white/30 pb-4'>Estadio Municipal de Chonchi</h2>
            <Input
                register={register}
                error={errors["username"]}
                name="username"
                label="Nombre de usuario"
                placeholder="usuario465"
                validations={{
                    required: validationRules.required
                }}
            />
            <Input
                register={register}
                error={errors["password"]}
                name="password"
                type='password'
                label="Contraseña"
                placeholder="*********"
                validations={{
                    required: validationRules.required
                }}
            />
            <div className='mt-4'>
                <Button text="Iniciar sesión" type="submit" />
            </div>
        </form>
    )
}

export default LoginForm