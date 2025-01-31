const Input = ({ type = "text", name, label, placeholder }) => {
    return (
        <div>
            <label className="block mb-1 text-sm" htmlFor={name}>{label}</label>
            <input id={name} autoComplete="off" placeholder={placeholder} className="bg-white rounded w-full text-sm text-black py-1 px-2 outline-0 border-2 border-slate-300 focus:border-emerald-400" type={type} />
        </div>
    )
}

export default Input