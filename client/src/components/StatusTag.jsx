const StatusTag = ({ status = "pendiente" }) => {

    let tagStyles = ""

    switch (status) {
        case "pendiente":
            tagStyles = "bg-orange-100 border-orange-600 text-orange-600"
            break;
        case "realizada":
            tagStyles = "bg-green-100 border-green-600 text-green-600"
            break;
        case "cancelada":
            tagStyles = "bg-red-100 border-red-600 text-red-600"
            break;
        default:
            break;
    }

    return (
        <span className={`text-xs py-0.5 px-2 rounded-full border ${tagStyles}`}>{status}</span>
    )
}

export default StatusTag