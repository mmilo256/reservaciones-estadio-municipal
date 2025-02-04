import dayjs from "dayjs"
import Event from "./Event"

const DayColumn = ({ weekDays, events }) => {
    return (
        <div className="grid grid-cols-7 max-h-96">
            {weekDays.map((dayOfWeek, index) => {
                const currentDate = dayOfWeek.format("DD MM YYYY")
                return (
                    <div key={index} className="border-r pt-2 border-r-slate-300 text-center min-h-dvh pr-2">
                        {events.map((event, index) => {
                            const eventDate = dayjs(event.hora_inicio).format("DD MM YYYY")
                            console.log(event)
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