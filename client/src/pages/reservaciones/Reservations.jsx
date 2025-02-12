import Container from "../../components/Container"
import StatusTag from "../../components/StatusTag"
import Table from "../../components/Table"
import { useEffect, useState } from 'react'
import { fetchReservationById, fetchReservations } from "../../services/ReservationServices"
import Pagination from "../../components/Pagination"
import dayjs from "dayjs"
import ReservationDetails from "./ReservationDetails"
import useCalendarStore from "../../stores/useCalendarStore"

const Reservations = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [reservations, setReservations] = useState([])
    const [totalPages, setTotalPages] = useState(null)

    const { selectedEvent, setSelectedEvent, setEventModal } = useCalendarStore()

    useEffect(() => {
        (async () => {

            const onHandleClick = async (id) => {
                try {
                    const response = await fetchReservationById(id)
                    setEventModal(true)
                    setSelectedEvent(response.reservacion)
                } catch (error) {
                    console.error(error.message)
                    alert("No se pudo obtener la información de la reservación")
                }
            }

            const res = await fetchReservations({ page: currentPage, limit: 3 })
            const formattedData = res.rows.map((reservation) => ({
                org: reservation.organizacion,
                actividad: reservation.actividad,
                fecha: dayjs(reservation.fecha_actividad).format("DD/MM/YYYY"),
                estado: <StatusTag status={reservation.estado} />,
                acciones: <button onClick={() => { onHandleClick(reservation.id) }} className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-6 py-0.5 rounded-full">Ver</button>
            }))
            setTotalPages(res.totalPages)
            setReservations(formattedData)
        })()
    }, [currentPage, setEventModal, setSelectedEvent])

    const table = {
        columns: ["Organización", "Actividad", "Fecha", "Estado", "Acciones"],
        data: reservations
    }

    return (
        <div className="bg-slate-100 pt-5 min-h-[calc(100dvh-3rem)]">
            <Container>
                <Table table={table} />
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </Container>
            <ReservationDetails event={selectedEvent} />
        </div>
    )
}

export default Reservations