import RoutesTableHeader from "./routes-table-header";
import RoutesTableBody from "./routes-table-body";

export default function RoutesTable({routes, busSufficiency, onCheckSufficiency, checkingRouteId, onDeleteRoute}) {

    return (
        <table className={"routes__table table"}>
            <RoutesTableHeader/>
            <RoutesTableBody routes={routes} busSufficiency={busSufficiency} onCheckSufficiency={onCheckSufficiency}
                             checkingRouteId={checkingRouteId} onDeleteRoute={onDeleteRoute} />
        </table>
    )
}
