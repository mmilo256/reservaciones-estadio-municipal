import EventCard from "./EventCard"
import ReservationForm from "../../forms/create-reservation/ReservationForm"
import Container from "../../components/Container"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { createReservation, fetchReservations } from "../../services/ReservationServices"
import dayjs from 'dayjs'
import 'dayjs/locale/es'

dayjs.locale("es")

const CreateReservation = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm()
    const [reservations, setReservations] = useState([])
    const [loading, setLoading] = useState(false)

    const fecha = watch("fecha_actividad")

    useEffect(() => {
        (async () => {
            try {
                if (fecha) {
                    setLoading(true)
                    setReservations([])
                    const data = await fetchReservations({ start: fecha, end: fecha, status: "activa" })
                    setReservations(data.rows)
                }
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        })()
    }, [fecha])

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

    return (
        <div className="bg-slate-100 py-5 min-h-[calc(100dvh-3rem)]">
            <Container className="sm:grid grid-cols-7 gap-4">
                <div className="mb-4 col-span-5">
                    <h2 className="text-xl text-center md:text-left mb-4">Nueva reservación</h2>
                    <ReservationForm
                        register={register}
                        handleSubmit={handleSubmit}
                        watch={watch}
                        errors={errors}
                        onSubmit={onSubmit}
                        buttonText="Crear reservación"
                    />
                </div>
                <div className="col-span-2">
                    <h2 className="text-xl text-center md:text-left">Horas ocupadas</h2>
                    <p className="py-2 text-center md:text-left">{fecha && dayjs(fecha).format("DD [de] MMMM [de] YYYY")}</p>
                    <div className="flex flex-col gap-2">
                        {loading && <p>Cargando reservaciones...</p>}
                        {reservations.map((reservation, index) => (
                            <EventCard key={index} title={reservation.actividad} startDate={reservation.hora_inicio} endDate={reservation.hora_termino} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CreateReservation