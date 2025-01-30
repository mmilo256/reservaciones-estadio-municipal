import dayjs from "dayjs"

const WeekHeader = ({ weekDays }) => {
    return (
        <div className="sticky top-0 w-full bg-white grid grid-cols-7 gap-2">
            {weekDays.map((dayOfWeek, index) => {
                const date = dayOfWeek.format("DD")
                const day = dayOfWeek.format("ddd").slice(0, -1)
                const today = dayjs().format("DD MM YYYY")
                const currentDay = dayOfWeek.format("DD MM YYYY")
                return (
                    <div key={index} className="py-2 flex flex-col items-center">
                        <span className={`text-2xl ${currentDay === today && "bg-green-500 text-white"} h-10 w-10 flex items-center justify-center rounded-full`}>{date}</span>
                        <span className={`text-sm ${currentDay === today && "text-green-500"} uppercase`}>{day}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default WeekHeader