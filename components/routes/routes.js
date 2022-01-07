import {routesTableHeader} from "../../constants/constants";
import {checkBusSufficiency} from "../../constants/copyright";

export default function Routes({routes, className, onCheckSufficiency}) {
    return (
        <div className={`${className} routes`}>
            <table className={"routes__table table"}>
                <thead>
                <tr className={"table__row"}>
                    {
                        routesTableHeader.map(header => {
                            return <th key={header} className={"table__header"}>{header}</th>
                        })
                    }
                    <th />
                </tr>
                </thead>
                <tbody>
                {
                    routes.map((route, index) => {
                        return (
                            <tr key={index} className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                                <>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{route.number}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{route.distance}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{route.needBusCount}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        <button className={"table__item"} onClick={() => onCheckSufficiency(route.id)}>{checkBusSufficiency}</button>
                                    </td>
                                </>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}