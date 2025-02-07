const EventCard = ({ title, startDate, endDate }) => {
    return (
        <div className="bg-amber-100 p-2 rounded shadow">
            <p className="font-semibold">{title}</p>
            <p className="font-light">{startDate} - {endDate}</p>
        </div>
    )
}

export default EventCard