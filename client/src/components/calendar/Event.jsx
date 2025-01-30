const Event = ({ data }) => {

    return (
        <div className="bg-green-200 text-left mb-2 px-1 h-20">
            <p className="text-sm h-10 w-full line-clamp-2">{data.title}</p>
            <p className="text-sm font-light">{data.startTime} - {data.endTime}</p>
        </div>
    )
}

export default Event