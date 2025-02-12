import EventCard from "./EventCard"
import ReservationForm from "../../forms/create-reservation/ReservationForm"
import Container from "../../components/Container"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { editReservation, fetchReservationById, fetchReservations } from "../../services/ReservationServices"
import dayjs from 'dayjs'
import { useNavigate, useParams } from "react-router-dom"
import StatusTag from "../../components/StatusTag"
import Button from "../../components/Button"
import 'dayjs/locale/es'
import Modal from "../../components/Modal"

dayjs.locale("es")

const EditReservation = () => {

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm()
    const [reservations, setReservations] = useState([])
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false)

    const [cancelModal, setCancelModal] = useState(false)

    const navigate = useNavigate()

    const { id } = useParams()

    const fecha = watch("fecha_actividad")

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const res = await fetchReservationById(id)
                setValue('organizacion', res.reservacion.organizacion)
                setValue('nombre_solicitante', res.reservacion.nombre_solicitante)
                setValue('correo_solicitante', res.reservacion.correo_solicitante)
                setValue('telefono_solicitante', res.reservacion.telefono_solicitante)
                setValue('actividad', res.reservacion.actividad)
                setValue('fecha_actividad', res.reservacion.fecha_actividad)
                setValue('hora_inicio', res.reservacion.hora_inicio)
                setValue('hora_termino', res.reservacion.hora_termino)
                setStatus(res.reservacion.estado)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        })()
    }, [id, setValue])

    useEffect(() => {
        (async () => {
            try {
                if (fecha) {
                    setReservations([])
                    const data = await fetchReservations({ start: fecha, end: fecha, status: "activa" })
                    setReservations(data.rows)
                }
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [fecha])

    const onOpenCancelModal = () => {
        setCancelModal(true)
    }

    const onCancelReservation = async () => {
        try {
            await editReservation(id, { estado: "cancelada" })
            alert("Se ha cancelado la reservación")
            navigate("/")
        } catch (error) {
            console.log(error.message)
            alert("No se pudo cancelar la reservación")
        }
    }

    const onSubmit = async (data) => {
        try {
            await editReservation(id, data)
            alert("Se ha editado la reservación")
            navigate("/")
        } catch (error) {
            console.log(error.message)
            alert("No se pudo editar la reservación")
        }
    }

    return (
        <div className="bg-slate-100 py-5 min-h-[calc(100dvh-3rem)]">
            <Container className="sm:grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <h2 className="text-xl text-center mb-4 flex items-center justify-center md:justify-start gap-2"><span>Editar reservación</span> <StatusTag status={status} /></h2>
                    <ReservationForm
                        register={register}
                        handleSubmit={handleSubmit}
                        watch={watch}
                        errors={errors}
                        onSubmit={onSubmit}
                        buttonText="Guardar cambios"
                    />
                    <div className="mt-2">
                        <Button onClick={onOpenCancelModal} variant="transparent" text="Cancelar reservación" />
                    </div>
                </div>
                <div>
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
            <Modal title="Cancelar reservación" modal={cancelModal} setModal={setCancelModal}>
                <p className="py-4">¿Seguro que desea cancelar esta reservación?</p>
                <div className="flex gap-4">
                    <Button onClick={() => { setCancelModal(false) }} variant="transparent" text="No" />
                    <Button onClick={onCancelReservation} text="Si, cancelar" />
                </div>
            </Modal>
        </div>
    )
}

export default EditReservation