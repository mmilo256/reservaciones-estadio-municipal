import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const BTN_STYLES = "block cursor-pointer border border-slate-300 bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-black p-1 rounded-full"

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {

    const onFirstPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1)
        }
    }

    const onPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const onNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const onLastPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(totalPages)
        }
    }

    return (
        <div className="flex items-center justify-center gap-2 py-2">
            <button onClick={onFirstPage} className={BTN_STYLES}> <MdFirstPage /> </button>
            <button onClick={onPrevPage} className={BTN_STYLES}> <MdNavigateBefore /> </button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={onNextPage} className={BTN_STYLES}> <MdNavigateNext /> </button>
            <button onClick={onLastPage} className={BTN_STYLES}> <MdLastPage /> </button>
        </div>
    )
}

export default Pagination