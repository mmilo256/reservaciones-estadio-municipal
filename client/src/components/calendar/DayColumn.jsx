import dayjs from "dayjs"
import Event from "./Event"

const DayColumn = ({ weekDays, events }) => {
    return (
        <div className="grid grid-cols-7 max-h-96">
            {weekDays.map((dayOfWeek, index) => {
                const currentDate = dayOfWeek.format("DD MM YYYY")
                return (
                    <div key={index} className="border-r border-r-slate-300 text-center min-h-dvh pr-2">
                        {events.map((event, index) => {
                            const eventDate = dayjs(event.startDate).format("DD MM YYYY")
                            if (eventDate === currentDate) {
                                const eventData = {
                                    title: event.title,
                                    startTime: dayjs(event.startDate).format("hh:mm"),
                                    endTime: dayjs(event.endDate).format("HH:mm")
                                }
                                return (
                                    <Event key={index} data={eventData} />
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