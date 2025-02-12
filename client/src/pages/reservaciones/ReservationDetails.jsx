import StatusTag from "../../components/StatusTag"
import dayjs from 'dayjs'
import useCalendarStore from "../../stores/useCalendarStore"
import Modal from "../../components/Modal"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const ReservationDetails = ({ event }) => {

    const { eventModal, setEventModal } = useCalendarStore()
    const navigate = useNavigate()

    const onEditReservation = () => {
        setEventModal(false)
        navigate(`/reservaciones/${event.id}/editar`)
    }

    return (
        <Modal modal={eventModal} setModal={setEventModal}>
            <div>
                <p className="text-slate-800 text-2xl mb-1 line-clamp-3">{event.actividad}</p>
                <p className="font-light text-slate-700">{dayjs(event.fecha_actividad).format("dddd, DD [de] MMMM [de] YYYY")}</p>
                <p className="font-light text-slate-700 mb-2">{event.hora_inicio} - {event.hora_termino}</p>
                <StatusTag status={event.estado} />
                <hr className="my-4 text-slate-300" />
                <div className="flex flex-col gap-2">
                    <p className="font-light text-slate-600"> <span className="font-normal">Organización:</span> {event.organizacion}</p>
                    <p className="font-light text-slate-600"> <span className="font-normal">Nombre solicitante:</span> {event.nombre_solicitante}</p>
                    {event.correo_solicitante && <p className="font-light text-slate-600"> <span className="font-normal">Correo solicitante:</span> {event.correo_solicitante}</p>}
                    {event.telefono_solicitante && <p className="font-light text-slate-600"> <span className="font-normal">Teléfono solicitante:</span> {event.telefono_solicitante}</p>}
                </div>
            </div>
            {event.estado === "activa" && <div className="mt-4">
                <Button onClick={onEditReservation} text="Editar" />
            </div>}
        </Modal>
    )
}

export default ReservationDetails