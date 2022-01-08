import SearchForm from "../search-form/search-form";
import BusesTableHeader from "../buses-table/buses-table-header";
import {autoParkTableHeader} from "../../constants/constants";
import BusesTableBody from "../buses-table/buses-table-body";

export default function InPark({buses, className, onSearchByLastName}) {
    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />

            <table className={"buses__table table"}>
                <BusesTableHeader header={autoParkTableHeader} />
                <BusesTableBody busesArray={buses} type={"autoPark"} />
            </table>
        </div>
    )
}