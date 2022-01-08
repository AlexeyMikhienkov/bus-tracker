import {checkBusSufficiency, currentBusCountText, deleteRouteText, needBusCountText} from "../../constants/copyright";

export default function RoutesTableBody({routes, busSufficiency, onCheckSufficiency, checkingRouteId, onDeleteRoute}) {
    const {busCount, needBusCount} = busSufficiency;

    const sufficiency = [
        {
            title: busCount,
            text: currentBusCountText
        },
        {
            title: needBusCount,
            text: needBusCountText
        },
    ];

    const rowButtons = [
        {
            text: checkBusSufficiency,
            func: onCheckSufficiency
        },
        {
            text: deleteRouteText,
            func: onDeleteRoute
        }
    ];

    return (
        <tbody>
        {
            routes.map((route, index) => {
                return (
                    <>
                        <tr key={index} className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                            {
                                Object.entries(route).map(([key, value]) => {
                                    if (key === "id")
                                        return;

                                    return (
                                        <td key={key} className={"table__cell"}>
                                            <p className={"table__item"}>{value}</p>
                                        </td>
                                    )
                                })
                            }
                            {
                                rowButtons.map((buttonData, index) => {
                                    const {text, func} = buttonData;

                                    return (
                                        <td key={index} className={"table__cell table__button-container"}>
                                            <button className={"table__button"}
                                                    onClick={() => func(route.id)}>{text}
                                            </button>
                                        </td>
                                    )
                                })
                            }
                        </tr>

                        {
                            route.id === checkingRouteId ?
                                sufficiency.map((item, index) => {
                                    return (
                                        <tr key={`${item.title}_${index}`} className={"table__row"}>
                                            <td className={"table__cell"} colSpan={5}>
                                                <p>{`${item.text} ${item.title}`}</p>
                                            </td>
                                        </tr>
                                    )
                                }) : null
                        }
                    </>
                )
            })
        }
        </tbody>
    )
}