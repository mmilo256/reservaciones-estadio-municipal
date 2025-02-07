import Toolbar from "./Toolbar"
import useCalendar from "../../hooks/useCalendar";
import DayColumn from "./DayColumn";
import WeekHeader from "./WeekHeader";

const Calendar = ({ events, currentWeek, setCurrentWeek }) => {

    const {
        weekDays,
        onNextWeek,
        onPrevWeek,
        onToday
    } = useCalendar(currentWeek, setCurrentWeek)

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