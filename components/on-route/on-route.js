import SearchForm from "../search-form/search-form";
import BusesTableHeader from "../buses-table/buses-table-header";
import {autoParkTableHeader, onRouteTableHeader} from "../../constants/constants";
import BusesTableBody from "../buses-table/buses-table-body";

export default function OnRoute({buses, routes, onSearchByLastName, className, onDropRoute}) {
    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />

            <table className={"buses__table table"}>
                <BusesTableHeader header={onRouteTableHeader} />
                <BusesTableBody busesArray={buses} routes={routes} type={"onRoute"} onAction={onDropRoute} />
            </table>
        </div>
    )

}