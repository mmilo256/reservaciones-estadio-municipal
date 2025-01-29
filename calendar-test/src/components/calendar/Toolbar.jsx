import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const BTN_STYLES = "bg-slate-100 hover:bg-slate-300 p-2 rounded cursor-pointer text-slate-600 hover:text-slate-800"

const Toolbar = ({ data, onNext, onPrev, onToday }) => {

    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-4">
            <div className="w-full h-full flex justify-center">
                <button onClick={onToday} className="bg-green-500 hover:bg-green-400 cursor-pointer text-white rounded py-1 px-6">Hoy</button>
            </div>
            <div className="flex items-center gap-2">
                <button className={BTN_STYLES} onClick={onPrev}><GrPrevious /></button>
                <span className="font-bold uppercase text-slate-500 w-60 text-sm text-center">{data.label}</span>
                <button className={BTN_STYLES} onClick={onNext}><GrNext /></button>
            </div>
            <div className="w-full h-full"></div>
        </div>
    )
}

export default Toolbar