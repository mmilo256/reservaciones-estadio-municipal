import dayjs from 'dayjs'
import Button from '../Button'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Toolbar = ({ currentWeek, onNextWeek, onPrevWeek, onToday }) => {

    const firstDay = dayjs(currentWeek).format('MMMM')
    const lastDay = dayjs(currentWeek).weekday(6).format("MMMM")
    const year = dayjs(currentWeek).format("YYYY")

    return (
        <div className="bg-slate-100 h-12 bg-light flex flex-col">
            {/* <p className="flex items-center justify-center text-xl h-full text-slate-600">{year}</p> */}
            <div className="h-full grid grid-cols-4">
                <div className="flex items-center justify-end">
                    <div className=''>
                        <Button onClick={onToday} variant='transparent' text="Hoy" />
                    </div>
                </div>
                <div className="flex justify-center items-center col-span-2">
                    <button onClick={onPrevWeek} className=" hover:bg-slate-100 cursor-pointer rounded-full flex justify-center items-center h-8 w-8"><GrPrevious /></button>
                    <p className="flex justify-center items-center w-56">{firstDay === lastDay ? firstDay : `${firstDay} - ${lastDay}`} de {year}</p>
                    <button onClick={onNextWeek} className=" hover:bg-slate-100 cursor-pointer rounded-full flex justify-center items-center h-8 w-8"><GrNext /></button>
                </div>
                <p className='flex items-center'></p>
            </div>
        </div>
    )
}

export default Toolbar