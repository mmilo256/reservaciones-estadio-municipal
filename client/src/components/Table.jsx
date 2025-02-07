const Table = ({ table }) => {
    return (
        <div className="overflow-x-scroll rounded shadow">
            <table className="p-4 w-full text-left bg-white text-sm">
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
                                className="px-2 py-1 min-w-[8rem]"
                            >{cell}</td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table