import {busesTableHeader} from "../../constants/constants";
import {addBusText} from "../../constants/copyright";
import SearchForm from "../search-form/search-form";
import AddButton from "../add-button/add-button";
import BusesTableHeader from "../buses-table/buses-table-header";
import BusesTableBody from "../buses-table/buses-table-body";

export default function Buses({buses, className, onDeleteBus, onSearchByLastName}) {
    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />
            <AddButton text={addBusText} path={'/buses/create'} />

            <table className={"buses__table table"}>
                <BusesTableHeader header={busesTableHeader} />
                <BusesTableBody busesArray={buses} onAction={onDeleteBus} type={"all"} />
            </table>
        </div>
    )
}