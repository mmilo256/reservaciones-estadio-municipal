const Event = ({ data }) => {

    return (
        <div className="bg-cyan-600 text-white rounded text-left mb-2 px-1 h-20">
            <p className="text-sm font-semibold h-10 w-full line-clamp-2">{data.actividad}</p>
            <p className="text-sm font-light">{data.hora_inicio} - {data.hora_termino}</p>
        </div>
    )
}

export default Event