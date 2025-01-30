import dayjs from 'dayjs'

const Toolbar = ({ currentWeek, onNextWeek, onPrevWeek, onToday }) => {

    const firstDay = dayjs(currentWeek).format('MMM DD')
    const lastDay = dayjs(currentWeek).weekday(6).format("MMM DD")
    const year = dayjs(currentWeek).format("YYYY")

    return (
        <div className="h-20 bg-white flex flex-col">
            <p className="flex items-center justify-center text-xl h-full text-slate-600">{year}</p>
            <div className="h-full grid grid-cols-4">
                <div className="flex items-center">
                    <button onClick={onToday} className="bg-green-300 px-4 py-1 rounded hover:bg-green-400 cursor-pointer">Hoy</button>
                </div>
                <div className="flex justify-between items-center col-span-2">
                    <button onClick={onPrevWeek} className="bg-slate-200 hover:bg-slate-300 cursor-pointer rounded py-1 px-4">Anterior</button>
                    <span className="flex uppercase justify-center items-center w-60">{firstDay} - {lastDay}</span>
                    <button onClick={onNextWeek} className="bg-slate-200 hover:bg-slate-300 cursor-pointer rounded py-1 px-4">Siguiente</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Toolbar