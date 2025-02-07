import { Link } from "react-router-dom"

const Button = ({ text = "button text", type = "button", variant = "primary", onClick }) => {

    let styles = ""

    switch (variant) {
        case "primary":
            styles = "bg-emerald-600 hover:bg-emerald-500 text-white"
            break
    }
    switch (variant) {
        case "transparent":
            styles = "bg-none hover:bg-slate-200 transition-colors text-slate-800 border border-slate-800"
            break
    }

    if (type === "link") {
        return <Link to={onClick} className={`${styles} rounded-full text-center cursor-pointer block w-full px-4 py-1`} type={type} >{text}</Link>
    }

    return (
        <button onClick={onClick} className={`${styles} rounded-full cursor-pointer block w-full px-4 py-1`} type={type} >{text}</button>
    )
}

export default Button