import { fetchReservationById } from "../../services/ReservationServices"
import useCalendarStore from "../../stores/useCalendarStore"

const Event = ({ data }) => {

    const { setSelectedEvent, setEventModal } = useCalendarStore()


    const onHandleClick = async () => {
        try {
            const response = await fetchReservationById(data.id)
            setEventModal(true)
            setSelectedEvent(response.reservacion)
        } catch (error) {
            console.error(error.message)
            alert("No se pudo obtener la información de la reservación")
        }
    }

    return (
        <button onClick={onHandleClick} className="block w-full bg-cyan-600 hover:bg-cyan-700 cursor-pointer text-white rounded text-left mb-2 p-1">
            <p className="text-xs mb-1 font-semibold w-full line-clamp-2">{data.actividad}</p>
            <p className="text-xs font-light">{data.hora_inicio} - {data.hora_termino}</p>
        </button>
    )
}

export default Event