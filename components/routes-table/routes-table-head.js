import {routesTableHeader} from "../../constants/constants";

export default function RoutesTableHead() {
    return (
        <thead>
        <tr className={"table__row"}>
            {
                routesTableHeader.map(header => {
                    return <th key={header} className={"table__header"}>{header}</th>
                })
            }
            <th className={"table__header"}/>
            <th className={"table__header"}/>
        </tr>
        </thead>
    )
}