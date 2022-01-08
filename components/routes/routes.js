import {addRouteText,} from "../../constants/copyright";
import {useRouter} from "next/router";
import RoutesTable from "../routes-table/routes-table";

export default function Routes({
                                   routes,
                                   className,
                                   busSufficiency,
                                   onCheckSufficiency,
                                   checkingRouteId,
                                   onDeleteRoute
                               }) {
    const router = useRouter();

    return (
        <div className={`${className} routes`}>

            <div className={"routes__add-route-button-container"}>
                <button className={"routes__add-route-button"}
                        onClick={() => router.push('/routes/create')}>{addRouteText}
                </button>
            </div>

            <RoutesTable routes={routes} busSufficiency={busSufficiency} onCheckSufficiency={onCheckSufficiency}
                         checkingRouteId={checkingRouteId} onDeleteRoute={onDeleteRoute}/>
        </div>
    )
}