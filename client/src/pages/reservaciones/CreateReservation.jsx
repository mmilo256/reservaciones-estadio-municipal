import EventCard from "./EventCard"
import CreateReservationForm from "../../forms/create-reservation/CreateReservationForm"
import Container from "../../components/Container"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { fetchReservations } from "../../services/ReservationServices"
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
                setLoading(true)
                setReservations([])
                const data = await fetchReservations({ start: fecha, end: fecha })
                setReservations(data.rows)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        })()
    }, [fecha])

    return (
        <div className="bg-slate-100 py-5 min-h-[calc(100dvh-3rem)]">
            <Container className="sm:grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <h2 className="text-xl text-center mb-4">Nueva reservación</h2>
                    <CreateReservationForm
                        register={register}
                        handleSubmit={handleSubmit}
                        watch={watch}
                        errors={errors}
                        reset={reset}
                    />
                </div>
                <div>
                    <h2 className="text-xl text-center">Horas ocupadas</h2>
                    <p className="py-2 text-center">{fecha && dayjs(fecha).format("DD [de] MMMM [de] YYYY")}</p>
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