import {del, getWithParams} from "../../utils/requests";
import Wrapper from "../../components/wrapper/wrapper";
import Buses from "../../components/buses/buses";
import {useState} from "react";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function BusesPage({buses: serverBuses, routes}) {
    const [buses, setBuses] = useState(serverBuses);

    function deleteBus(busId) {
        del(`/bus/${busId}`, {
            id: busId
        })
            .then(() => setBuses(buses.filter(bus => bus.id !== busId)))
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

    function searchByLastName(lastName) {
        if (lastName)
            getWithParams('/bus/filter', {driverLastNameStartWith: lastName})
                .then(res => setBuses(res.data))
                .catch(({response}) => console.log(response));
        else
            setBuses(serverBuses);
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.buses} />
            <Buses buses={buses} routes={routes} className={"wrapper__buses"} onDeleteBus={deleteBus}
                   onSearchByLastName={searchByLastName}/>
        </Wrapper>
    )

}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const resBuses = await getWithParams('/bus', params);
    const buses = resBuses.data;

    const resRoutes = await getWithParams('/route', params);
    const routes = resRoutes.data;

    return {
        props: {
            buses,
            routes
        }
    }
}