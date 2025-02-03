import Button from "../../components/Button"
import Input from "../../components/Input"
import { useForm } from 'react-hook-form'
import { validationRules } from "../validations"

const CreateReservationForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Nombre de la organización"
                    name="orgName"
                    placeholder="Club Deportivo 77"
                    validations={{
                        required: validationRules.required,
                        minLength: validationRules.minLength(3)
                    }}
                    error={errors["orgName"]}
                />
                <Input
                    register={register}
                    label="Nombre del solicitante"
                    name="personName"
                    placeholder="Juan Pérez"
                    validations={{
                        required: validationRules.required,
                        minLength: validationRules.minLength(3)
                    }}
                    error={errors["personName"]}
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Correo electrónico"
                    name="email"
                    placeholder="correo@ejemplo.cl"
                    type="email"
                    validations={{
                        pattern: validationRules.email
                    }}
                    error={errors["email"]}
                />
                <Input
                    register={register}
                    label="Teléfono"
                    name="phone"
                    placeholder="958654985"
                    type="number"
                    validations={{
                        minLength: validationRules.minLength(8)
                    }}
                    error={errors["phone"]}
                />
            </div>
            <hr className="text-slate-300 mt-2" />
            <Input
                register={register}
                label="Nombre de la actividad"
                name="activityName"
                placeholder="Campeonato de fútbol"
                validations={{
                    required: validationRules.required,
                    minLength: validationRules.minLength(3)
                }}
                max={9}
                error={errors["activityName"]}
            />
            <Input
                register={register}
                label="Fecha de la actividad"
                name="date"
                type="date"
                min={"2025-02-03"}
                validations={{
                    required: validationRules.required
                }}
                error={errors["date"]}
            />
            {watch("date") && <div className="grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Hora de inicio"
                    name="startTime"
                    type="time"
                    validations={{
                        required: validationRules.required
                    }}
                    error={errors["startTime"]}
                />
                <Input
                    register={register}
                    label="Hora de término"
                    name="endTime"
                    type="time"
                    validations={{
                        required: validationRules.required
                    }}
                    error={errors["endTime"]}
                />
            </div>}
            <div className="mt-4">
                <Button type="submit" text="Crear reservación" />
            </div>
        </form>
    )
}

export default CreateReservationForm