import RoutesTableHead from "./routes-table-head";
import RoutesTableBody from "./routes-table-body";

export default function RoutesTable({routes, busSufficiency, onCheckSufficiency, checkingRouteId, onDeleteRoute}) {

    return (
        <table className={"routes__table table"}>
            <RoutesTableHead/>
            <RoutesTableBody routes={routes} busSufficiency={busSufficiency} onCheckSufficiency={onCheckSufficiency}
                             checkingRouteId={checkingRouteId} onDeleteRoute={onDeleteRoute} />
        </table>
    )
}
