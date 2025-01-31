import dayjs from "dayjs"
import Calendar from "../components/calendar/Calendar"

const Home = () => {

    const events = [
        {
            title: "titulo",
            startDate: dayjs("2025-01-30T09:00:00"),
            endDate: dayjs("2025-01-30T11:00:00")
        }, {
            title: "evento n°2",
            startDate: dayjs("2025-01-31T09:00:00"),
            endDate: dayjs("2025-01-31T11:00:00")
        }
    ]

    return (
        <div className="shadow h-[30rem] overflow-hidden">
            <Calendar events={events} />
        </div>
    )
}

export default Home