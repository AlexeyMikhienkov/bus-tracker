import {addRouteText,} from "../../constants/copyright";
import {useRouter} from "next/router";
import RoutesTable from "../routes-table/routes-table";
import AddButton from "../add-button/add-button";

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

            <AddButton text={addRouteText} path={'/routes/create'} />

            <RoutesTable routes={routes} busSufficiency={busSufficiency} onCheckSufficiency={onCheckSufficiency}
                         checkingRouteId={checkingRouteId} onDeleteRoute={onDeleteRoute}/>
        </div>
    )
}