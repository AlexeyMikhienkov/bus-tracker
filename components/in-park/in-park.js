import {addBusText, chooseRouteText} from "../../constants/copyright";
import {useRouter} from "next/router";
import SearchForm from "../search-form/search-form";
import AddButton from "../add-button/add-button";
import BusesTableHeader from "../buses-table/buses-table-header";
import {busesTableHeader} from "../../constants/constants";
import BusesTableBody from "../buses-table/buses-table-body";

export default function InPark({buses, className, onSearchByLastName}) {
    const router = useRouter();

    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />

            <table className={"buses__table table"}>
                <BusesTableHeader header={busesTableHeader} />
                <BusesTableBody busesArray={buses} type={"autoPark"} />
            </table>
        </div>
    )


    return (
        <div className={`${className} in-park`}>
            {
                buses.map(bus => {
                    return (
                        <>
                            <p>{`id: ${bus.id}, driver: ${bus.driverLastName}`}</p>

                            <button onClick={() => router.push(`/choose-route/${bus.id}`)}>{chooseRouteText}</button>
                        </>
                    )
                })
            }
        </div>
    )
}