import dayjs from 'dayjs'
import Button from '../Button'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Container from '../Container';

const Toolbar = ({ currentWeek, onNextWeek, onPrevWeek, onToday }) => {

    const firstDay = dayjs(currentWeek)
    const lastDay = dayjs(currentWeek).weekday(6)
    const year = dayjs(currentWeek)

    return (
        <div className="bg-slate-100 h-12 bg-light flex flex-col">
            <Container className="h-full flex items-center justify-between">
                <div className='w-32'>
                    <Button onClick={onToday} variant='transparent' text="Hoy" />
                </div>
                <div className="flex justify-end items-center">
                    <button onClick={onPrevWeek} className="hover:bg-slate-100 cursor-pointer rounded-full flex justify-center items-center h-8 w-8"><GrPrevious /></button>
                    <p className="hidden md:flex justify-center items-center w-32">{firstDay.format("MM YY") === lastDay.format("MM YY") ? firstDay.format("MMM") : `${firstDay.format("MMM")} - ${lastDay.format("MMM")}`} {year.format("YYYY")}</p>
                    <p className="md:hidden flex justify-center items-center w-20">{firstDay.format("MM YY") === lastDay.format("MM YY") ? firstDay.format("MMM") : `${firstDay.format("MMM")} - ${lastDay.format("MMM")}`}</p>
                    <button onClick={onNextWeek} className="hover:bg-slate-100 cursor-pointer rounded-full flex justify-center items-center h-8 w-8"><GrNext /></button>
                </div>
            </Container>
        </div>
    )
}

export default Toolbar