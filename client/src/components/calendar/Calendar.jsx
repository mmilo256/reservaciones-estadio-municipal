import Toolbar from "./Toolbar"
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import weekday from "dayjs/plugin/weekday";
import useCalendar from "../../hooks/useCalendar";
import DayColumn from "./DayColumn";
import WeekHeader from "./WeekHeader";

const Calendar = ({ events }) => {

    dayjs.locale("es")
    dayjs.extend(weekday)

    const { currentWeek,
        weekDays,
        onNextWeek,
        onPrevWeek,
        onToday
    } = useCalendar()

    return (
        <div>
            <Toolbar
                onNextWeek={onNextWeek}
                onPrevWeek={onPrevWeek}
                onToday={onToday}
                currentWeek={currentWeek}
            />
            <div className="overflow-y-scroll relative">
                <WeekHeader weekDays={weekDays} />
                <DayColumn weekDays={weekDays} events={events} />
            </div>
        </div>
    )
}

export default Calendar