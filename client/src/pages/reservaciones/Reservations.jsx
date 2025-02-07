import Container from "../../components/Container"
import StatusTag from "../../components/StatusTag"
import Table from "../../components/Table"

const Reservations = () => {

    const table = {
        columns: ["Organización", "Actividad", "Fecha", "Estado", "Acciones"],
        data: [
            {
                org: "Nombre organización",
                actividad: "Campeonato",
                fecha: "24/12/2025",
                estado: <StatusTag status="realizada" />,
                acciones: <button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-6 py-0.5 rounded-full">Ver</button>
            }, {
                org: "Nombre organización",
                actividad: "Partido de fútbol",
                fecha: "25/12/2025",
                estado: <StatusTag status="pendiente" />,
                acciones: <button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-6 py-0.5 rounded-full">Ver</button>
            }, {
                org: "Organización 3",
                actividad: "Actividad",
                fecha: "25/12/2025",
                estado: <StatusTag status="cancelada" />,
                acciones: <button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-6 py-0.5 rounded-full">Ver</button>
            }, {
                org: "Organización 4",
                actividad: "Actividad",
                fecha: "25/12/2025",
                estado: <StatusTag status="realizada" />,
                acciones: <button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white px-6 py-0.5 rounded-full">Ver</button>
            }
        ]
    }

    return (
        <div className="bg-slate-100 pt-5 min-h-[calc(100dvh-3rem)]">
            <Container>
                <Table table={table} />
            </Container>
        </div>
    )
}

export default Reservations