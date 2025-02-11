import { FaTimes } from "react-icons/fa";

const Modal = ({ children, title, modal, setModal }) => {

    const onCloseModal = () => {
        setModal(false)
    }

    if (!modal) return null


    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-70">
            <div className="bg-white p-4 rounded w-[94%] max-w-[20rem]">
                <div className="flex justify-between items-center">
                    <p>{title}</p>
                    <button className="text-slate-400 hover:text-black cursor-pointer p-2" onClick={onCloseModal}> <FaTimes /> </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal