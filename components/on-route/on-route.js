import {dropFromRouteText} from "../../constants/copyright";

export default function OnRoute({buses, onDropRoute, className}) {
    return (
        <div className={`${className} on-route`}>
            {
                buses.map(bus => {
                    return (
                        <>
                            <p>{`id: ${bus.id}, route: ${bus.routeId}, driver: ${bus.driverLastName}`}</p>
                            <button onClick={() => onDropRoute(bus.id)}>{dropFromRouteText}</button>
                        </>
                    )
                })
            }
        </div>
    )

}