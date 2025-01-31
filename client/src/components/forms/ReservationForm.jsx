import Button from "../ui/Button"
import Input from "../ui/Input"

const ReservationForm = () => {
    return (
        <form className="flex flex-col gap-2">
            <Input
                label="Nombre del solicitante"
                name="name"
                placeholder="Juan Pérez"
            />
            <Input
                label="Correo electrónico"
                name="email"
                placeholder="correo@ejemplo.cl"
                type="email"
            />
            <div className="grid grid-cols-2 gap-2">
                <Input
                    label="Teléfono"
                    name="phone"
                    placeholder="9 58654985"
                    type="number"
                />
                <Input
                    label="Fecha de la actividad"
                    name="date"
                    type="date"
                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <Input
                    label="Hora de inicio"
                    name="startTime"
                    type="time"
                />
                <Input
                    label="Hora de término"
                    name="endTime"
                    type="time"
                />
            </div>
            <div className="mt-4">
                <Button type="submit" text="Crear reservación" />
            </div>
        </form>
    )
}

export default ReservationForm