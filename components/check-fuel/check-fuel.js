import {totalConsumptions} from "../../constants/copyright";
import {checkFuelTableHeader} from "../../constants/constants";

export default function CheckFuel({className, consumptions}) {
    const {total, routes} = consumptions;

    return (
        <div className={`${className} check-fuel`}>
            <div className={"check-fuel__text-container"}>
                <p className={"check-fuel__text"}>{`${totalConsumptions} ${total}`}</p>
            </div>
            <table>
                <thead>
                {
                    checkFuelTableHeader.map(header => {
                        return <th key={header} className={"table__header"}>{header}</th>
                    })
                }
                </thead>
                <tbody>
                {
                    routes.map(routeObj => {
                        const {route, consumption} = routeObj;

                        return (
                            <tr className={"table__row"}>
                                <td className={"table__cell"}>
                                    <p className={"table__item"}>{route.number}</p>
                                </td>
                                <td className={"table__cell"}>
                                    <p className={"table__item"}>{route.distance}</p>
                                </td>
                                <td className={"table__cell"}>
                                    <p className={"table__item"}>{consumption}</p>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}