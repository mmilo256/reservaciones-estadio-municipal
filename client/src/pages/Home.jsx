import dayjs from "dayjs"
import Calendar from "../components/calendar/Calendar"
import { useEffect, useState } from "react"
import { fetchReservations } from "../services/ReservationServices"
import 'dayjs/locale/es'
import weekday from "dayjs/plugin/weekday";

const Home = () => {

    dayjs.locale("es")
    dayjs.extend(weekday)

    const [currentWeek, setCurrentWeek] = useState(dayjs().weekday(0));
    const [currentWeekLastDay, setCurrentWeekLastDay] = useState(dayjs().weekday(6))

    const [reservaciones, setReservaciones] = useState([])

    // Calcular el último día de la semana basándose en el primer día
    useEffect(() => {
        setCurrentWeekLastDay(dayjs(currentWeek).weekday(6))
    }, [currentWeek])

    // Cargar todas las reservaciones
    useEffect(() => {
        (async () => {
            try {
                const data = await fetchReservations({ status: "activa", start: dayjs(currentWeek).format("YYYY-MM-DD"), end: dayjs(currentWeekLastDay).format("YYYY-MM-DD") })
                setReservaciones(data.rows)
            } catch (error) {
                console.log(error.message)
            }
        })()
    }, [currentWeek, currentWeekLastDay])

    return (
        <div className="shadow">
            <Calendar events={reservaciones} currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
        </div>
    )
}

export default Home