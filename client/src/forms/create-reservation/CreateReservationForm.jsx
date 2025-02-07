import Button from "../../components/Button"
import Input from "../../components/Input"
import { validationRules } from "../validations"
import { formatDate } from "../../utils/format"
import { createReservation } from "../../services/ReservationServices"

const CreateReservationForm = ({ register, handleSubmit, watch, errors, reset }) => {

    const onSubmit = async (data) => {
        try {
            await createReservation(data)
            alert("Se ha agregado la reservación")
            reset()
        } catch (error) {
            console.log(error.message)
            alert("No se pudo crear la reservación")
        }
    }

    // Fecha de hoy
    const today = formatDate(new Date())

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div className="md:grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Nombre de la organización"
                    name="organizacion"
                    placeholder="Club Deportivo 77"
                    validations={{
                        required: validationRules.required,
                        minLength: validationRules.minLength(3)
                    }}
                    error={errors["organizacion"]}
                />
                <Input
                    register={register}
                    label="Nombre del solicitante"
                    name="nombre_solicitante"
                    placeholder="Juan Pérez"
                    validations={{
                        required: validationRules.required,
                        minLength: validationRules.minLength(3)
                    }}
                    error={errors["nombre_solicitante"]}
                />
            </div>
            <div className="md:grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Correo electrónico"
                    name="correo_solicitante"
                    placeholder="correo@ejemplo.cl"
                    type="email"
                    validations={{
                        pattern: validationRules.email
                    }}
                    error={errors["correo_solicitante"]}
                />
                <Input
                    register={register}
                    label="Teléfono"
                    name="telefono_solicitante"
                    onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                    placeholder="958654985"
                    type="text"
                    maxLength={9}
                    validations={{
                        minLength: validationRules.minLength(8)
                    }}
                    error={errors["telefono_solicitante"]}
                />
            </div>
            <hr className="text-slate-300 mt-2" />
            <Input
                register={register}
                label="Nombre de la actividad"
                name="actividad"
                placeholder="Campeonato de fútbol"
                validations={{
                    required: validationRules.required,
                    minLength: validationRules.minLength(3)
                }}
                max={9}
                error={errors["actividad"]}
            />
            <Input
                register={register}
                label="Fecha de la actividad"
                name="fecha_actividad"
                type="date"
                min={today}
                validations={{
                    required: validationRules.required
                }}
                error={errors["fecha_actividad"]}
            />
            {watch("fecha_actividad") && <div className="grid grid-cols-2 gap-2">
                <Input
                    register={register}
                    label="Hora de inicio"
                    name="hora_inicio"
                    type="time"
                    validations={{
                        required: validationRules.required
                    }}
                    error={errors["hora_inicio"]}
                />
                <Input
                    register={register}
                    label="Hora de término"
                    name="hora_termino"
                    type="time"
                    validations={{
                        required: validationRules.required
                    }}
                    error={errors["hora_termino"]}
                />
            </div>}
            <div className="mt-4">
                <Button type="submit" text="Crear reservación" />
            </div>
        </form>
    )
}

export default CreateReservationForm