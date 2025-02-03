const Input = ({
    type = "text",
    name,
    label,
    placeholder,
    register,
    validations,
    error,
    max,
    min
}) => {

    return (
        <div>
            <label
                className="block mb-1 text-xs"
                htmlFor={name}
            >{label} {!validations.required?.value && <span className="text-slate-400">(opcional)</span>} </label>
            <input
                id={name}
                className={`bg-white rounded w-full text-sm text-black py-1 px-2 outline-0 border-2 ${error ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-slate-400"}`}
                autoComplete="off"
                placeholder={placeholder}
                type={type}
                max={max}
                min={min}
                {...(register ? register(name, { ...validations }) : {})}
            />
            {error && <span className="text-xs text-red-500">{error.message}</span>}
        </div>
    )
}

export default Input