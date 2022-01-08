export default function BusesTableHeader({header}) {
    return (
        <thead>
        <tr className={"table__row"}>
            {
                header.map(header => {
                    return <th key={header} className={"table__header"}>{header}</th>
                })
            }
            <th className={"table__header"}/>
        </tr>
        </thead>
    )
}