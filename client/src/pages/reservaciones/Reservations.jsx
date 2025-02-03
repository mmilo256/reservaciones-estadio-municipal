import Container from "../../components/Container"
import StatusTag from "../../components/StatusTag"

const Reservations = () => {

    const table = {
        columns: ["Organización", "Actividad", "Fecha", "Estado"],
        data: [
            {
                org: "Nombre organización",
                actividad: "Campeonato 3000",
                fecha: "24/12/2025",
                estado: <StatusTag status="realizada" />
            }
        ]
    }

    return (
        <div className="bg-slate-100 pt-5 min-h-[calc(100dvh-3rem)]">
            <Container>
                <table className="shadow rounded overflow-hidden p-4 w-full text-left bg-white text-sm">
                    <thead className="bg-emerald-600">
                        <tr>
                            {table.columns.map((col, index) => (
                                <th
                                    key={index}
                                    className="px-2 py-1 font-medium text-white"
                                >{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {table.data.map((row, index) => (
                            <tr
                                key={index}
                                className="even:bg-emerald-50 odd:bg-white hover:bg-emerald-100"
                            > {Object.values(row).map((cell, index) => (
                                <td
                                    key={index}
                                    className="px-2 py-1"
                                >{cell}</td>
                            ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    )
}

export default Reservations