import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../styles/calendar.css'
import Header from './calendar/Header'
import Toolbar from './calendar/Toolbar'
import { useCallback, useState } from 'react'

dayjs.locale("es")

const Dashboard = () => {

    const localizer = dayjsLocalizer(dayjs)

    const [date, setDate] = useState(dayjs().toDate())

    const onTodayClick = useCallback(() => {
        setDate(dayjs().toDate())
    }, [])

    const onNextClick = useCallback(() => {
        setDate(dayjs(date).add(1, "week"))
    }, [date])
    const onPrevClick = useCallback(() => {
        setDate(dayjs(date).add(-1, "week"))
    }, [date])

    const events = [
        {
            start: dayjs('2025-01-29T09:24:00').toDate(),
            end: dayjs('2025-01-29T11:30:00').toDate(),
            title: "Campeonato"
        }
    ]

    return (
        <div className='max-w-[50rem] mx-auto'>
            <Calendar
                messages={{
                    next: "Siguiente",
                    today: "Hoy",
                    previous: "Anterior",
                    week: "Semanal",
                    month: "Mensual"
                }}
                views={["week"]}
                defaultView='week'
                min={dayjs("2024-01-01T08:00:00").toDate()}
                localizer={localizer}
                events={events}
                startAccessor="start"
                date={date}
                onNavigate={setDate}
                endAccessor="end"
                style={{ height: 500 }}
                formats={{
                    dayFormat: (date) => {
                        return dayjs(date).format("ddd DD")
                    },
                    dayRangeHeaderFormat: (date) => {
                        console.log(date)
                        const start = dayjs(date.start).format("MMMM DD")
                        const end = dayjs(date.end).format("MMMM DD")
                        const string = `${start} - ${end}`
                        return string
                    }
                }}
                components={{
                    header: (data) => {
                        return <Header data={data} />
                    },
                    toolbar: (data) => {
                        return <Toolbar
                            data={data}
                            onNext={onNextClick}
                            onPrev={onPrevClick}
                            onToday={onTodayClick} />
                    }
                }}
            />
        </div>
    )
}

export default Dashboard