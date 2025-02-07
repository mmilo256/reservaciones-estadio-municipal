import Toolbar from "./Toolbar"
import useCalendar from "../../hooks/useCalendar";
import DayColumn from "./DayColumn";
import WeekHeader from "./WeekHeader";
import Modal from "../Modal";
import useCalendarStore from "../../stores/useCalendarStore";
import ReservationDetails from "../../pages/reservaciones/ReservationDetails";

const Calendar = ({ events, currentWeek, setCurrentWeek }) => {

    const { selectedEvent } = useCalendarStore()

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
            <Modal>
                <ReservationDetails event={selectedEvent} />
            </Modal>
        </div>
    )
}

export default Calendar