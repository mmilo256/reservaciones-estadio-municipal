import dayjs from "dayjs"
import Event from "./Event"

const DayColumn = ({ weekDays, events }) => {
    return (
        <div className="grid grid-cols-7 min-w-[40rem]">
            {weekDays.map((dayOfWeek, index) => {
                const currentDate = dayOfWeek.format("DD MM YYYY")
                return (
                    <div key={index} className="border-r pt-2 border-r-slate-300 h-72 md:80 text-center pr-2">
                        {events.map((event, index) => {
                            const eventDate = dayjs(event.fecha_actividad + "T" + event.hora_inicio).format("DD MM YYYY")
                            if (eventDate === currentDate) {

                                return (
                                    <Event key={index} data={event} />
                                )
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default DayColumn