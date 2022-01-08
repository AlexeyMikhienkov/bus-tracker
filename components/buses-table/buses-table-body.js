import {busStatus} from "../../constants/constants";
import {chooseRouteText, deleteBusText} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function BusesTableBody({busesArray, onAction, type}) {
    const router = useRouter();

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
                                <p className={"table__item"}>{bus.fuelPerKm}</p>
                            </td>
                            {
                                type === "all" ?
                                    <>
                                        <td className={"table__cell"}>
                                            {
                                                bus.routeId !== null ?
                                                    <p className={"table__item"}>{`${busStatus.onRoute} ${bus.routeId}`}</p> :
                                                    <p className={"table__item"}>{`${busStatus.inPark}`}</p>
                                            }
                                        </td>
                                        <td className={"table__cell"}>
                                            <button className={"table__button"}
                                                    onClick={() => onAction(bus.id)}>{deleteBusText}
                                            </button>
                                        </td>
                                    </> :
                                    <td className={"table__cell"}>
                                        <button className={"table__button"}
                                                onClick={() => router.push(`/choose-route/${bus.id}`)}>
                                            {chooseRouteText}
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