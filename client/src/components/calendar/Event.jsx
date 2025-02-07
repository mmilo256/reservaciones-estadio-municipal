const Event = ({ data }) => {

    return (
        <div className="bg-cyan-600 text-white rounded text-left mb-2 p-1">
            <p className="text-xs mb-1 font-semibold w-full line-clamp-2">{data.actividad}</p>
            <p className="text-xs font-light">{data.hora_inicio} - {data.hora_termino}</p>
        </div>
    )
}

export default Event