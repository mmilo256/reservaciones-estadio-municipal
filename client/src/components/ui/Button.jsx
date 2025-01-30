const Button = ({ text, type }) => {
    return (
        <button className="block w-full bg-teal-400 px-4 py-2" type={type} >{text}</button>
    )
}

export default Button