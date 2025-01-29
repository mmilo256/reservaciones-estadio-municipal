const Header = ({ data }) => {

    const dayArray = data.label.split(" ")
    const day = dayArray[0]
    const date = dayArray[1]

    return (
        <span className="flex flex-col min-h-12 text-slate-500">
            <span className="text-xl">{date}</span>
            <span className="font-medium text-xs uppercase">{day}</span>
        </span>
    )
}

export default Header