import {routesTableHeader} from "../../constants/constants";
import {
    addRouteText,
    checkBusSufficiency,
    currentBusCountText,
    needBusCountText
} from "../../constants/copyright";
import {useRouter} from "next/router";

export default function Routes({routes, className, busSufficiency, onCheckSufficiency, checkingRouteId}) {
    const {busCount, needBusCount} = busSufficiency;

    const router = useRouter();

    return (
        <div className={`${className} routes`}>

            <div className={"routes__add-route-button-container"}>
                <button onClick={() => router.push('/routes/create')}>{addRouteText}</button>
            </div>

            <table className={"routes__table table"}>
                <thead>
                <tr className={"table__row"}>
                    {
                        routesTableHeader.map(header => {
                            return <th key={header} className={"table__header"}>{header}</th>
                        })
                    }
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    routes.map((route, index) => {
                        return (
                            <>
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
                                            <button className={"table__item"}
                                                    onClick={() => onCheckSufficiency(route.id)}>{checkBusSufficiency}</button>
                                        </td>
                                    </>
                                </tr>

                                {
                                    route.id === checkingRouteId ?
                                        <>
                                            <tr>
                                                <td colSpan={4}>
                                                    <p>{`${currentBusCountText} ${busCount}`}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}>
                                                    <p>{`${needBusCountText} ${needBusCount}`}</p>
                                                </td>
                                            </tr>
                                        </> :
                                        null
                                }
                            </>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}