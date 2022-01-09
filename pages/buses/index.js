import {deleteRequest, getWithParamsRequest} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";
import Buses from "../../components/buses/buses";
import {useState} from "react";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function BusesPage({serverBuses, serverRoutes}) {
    const [buses, setBuses] = useState(serverBuses);

    function deleteBus(busId) {
        deleteRequest(`/bus/${busId}`, {
            id: busId
        })
            .then(() => setBuses(buses.filter(bus => bus.id !== busId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    function searchByLastName(lastName) {
        if (lastName)
            getWithParamsRequest('/bus/filter', {driverLastNameStartWith: lastName})
                .then(res => setBuses(res.data))
                .catch(({response}) => console.log(response));
        else
            setBuses(serverBuses);
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.buses} />
            <Buses buses={buses} routes={serverRoutes} className={"wrapper__buses"} onDeleteBus={deleteBus}
                   onSearchByLastName={searchByLastName}/>
        </Wrapper>
    )

}

export async function getStaticProps() {
    const resBuses = await getWithParamsRequest('/bus', {limit: 10000});
    const serverBuses = resBuses.data;

    const resRoutes = await getWithParamsRequest('/route', {limit: 10000});
    const serverRoutes = resRoutes.data;

    return {
        props: {
            serverBuses,
            serverRoutes
        }
    }
}