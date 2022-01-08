import {busesTableHeader, busStatus} from "../../constants/constants";
import {addBusText, deleteBusText} from "../../constants/copyright";
import SearchForm from "../search-form/search-form";
import AddButton from "../add-button/add-button";

export default function Buses({buses, className, onDeleteBus, onSearchByLastName}) {
    return (
        <div className={`${className} buses`}>

            <SearchForm className={"buses"} onSearchByParam={onSearchByLastName} />
            <AddButton text={addBusText} path={'/buses/create'} />

            <table className={"buses__table table"}>
                <thead>
                <tr className={"table__row"}>
                    {
                        busesTableHeader.map(header => {
                            return <th key={header} className={"table__header"}>{header}</th>
                        })
                    }
                    <th className={"table__header"}/>
                </tr>
                </thead>
                <tbody>
                {
                    buses.map((bus, index) => {
                        return (
                            <tr key={index} className={`table__row ${!(index % 2) ? "table__row_even" : ""}`}>
                                <>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{bus.number}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{`${bus.driverLastName} ${bus.driverFirstName}`}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        <p className={"table__item"}>{bus.fuelPerKm}</p>
                                    </td>
                                    <td className={"table__cell"}>
                                        {
                                            bus.routeId !== null ?
                                                <p className={"table__item"}>{`${busStatus.onRoute} ${bus.routeId}`}</p> :
                                                <p className={"table__item"}>{`${busStatus.inPark}`}</p>
                                        }
                                    </td>
                                    <td className={"table__cell"}>
                                        <button className={"table__button"}
                                                onClick={() => onDeleteBus(bus.id)}>{deleteBusText}
                                        </button>
                                    </td>
                                </>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}