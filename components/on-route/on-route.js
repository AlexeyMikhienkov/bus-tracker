import SearchForm from "../search-form/search-form";
import BusesTableHeader from "../buses-table/buses-table-header";
import {autoParkTableHeader, busesTableHeader} from "../../constants/constants";
import BusesTableBody from "../buses-table/buses-table-body";

export default function OnRoute({buses, onSearchByLastName, className, onDropRoute}) {
    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />

            <table className={"buses__table table"}>
                <BusesTableHeader header={autoParkTableHeader} />
                <BusesTableBody busesArray={buses} type={"onRoute"} onAction={onDropRoute} />
            </table>
        </div>
    )

}