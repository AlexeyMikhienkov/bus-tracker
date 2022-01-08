import {busStatus} from "../../constants/constants";
import {chooseRouteText, deleteBusText, dropFromRouteText} from "../../constants/copyright";
import {useRouter} from "next/router";
import getRouteNumber from "../../utils/getRouteNumber";

export default function BusesTableBody({busesArray, routes, onAction, type}) {
    const router = useRouter();

    const tableButtonText = {
        all: deleteBusText,
        autoPark: chooseRouteText,
        onRoute: dropFromRouteText
    }

    return (
        <tbody>
        {
            busesArray.map((bus, index) => {
                return (
                    <tr key={index} className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                        <>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{bus.number}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{`${bus.driverLastName} ${bus.driverFirstName}`}</p>
                            </td>
                            <td className={"table__cell"}>
                                <p className={"table__item"}>{type === "onRoute" ? getRouteNumber(routes, bus.routeId) : bus.fuelPerKm}</p>
                            </td>
                            {
                                type === "all" ?
                                    <>
                                        <td className={"table__cell"}>
                                            {
                                                bus.routeId !== null ?
                                                    <p className={"table__item"}>{`${busStatus.onRoute} ${getRouteNumber(routes, bus.routeId)}`}</p> :
                                                    <p className={"table__item"}>{`${busStatus.inPark}`}</p>
                                            }
                                        </td>
                                        <td className={"table__cell"}>
                                            <button className={"table__button"}
                                                    onClick={() => onAction(bus.id)}>{tableButtonText[type]}
                                            </button>
                                        </td>
                                    </> :
                                    <td className={"table__cell"}>
                                        <button className={"table__button"}
                                                onClick={type === "autoPark" ?
                                                    () => router.push(`/choose-route/${bus.id}`) :
                                                    () => onAction(bus.id)}>
                                            {tableButtonText[type]}
                                        </button>
                                    </td>
                            }
                        </>
                    </tr>
                )
            })
        }
        </tbody>
    )
}