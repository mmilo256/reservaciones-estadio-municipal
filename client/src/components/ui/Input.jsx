const Input = ({ type = "text", name, label }) => {
    return (
        <div>
            <label className="mb-1 text-sm" htmlFor={name}>{label}</label>
            <input className="bg-white w-full text-sm text-black p-1 outline-0 border-2 border-white rounded focus:border-teal-400" type={type} />
        </div>
    )
}

export default Input