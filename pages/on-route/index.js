import {getWithParams, postWithParams} from "../../utils/requests";
import {useEffect, useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import OnRoute from "../../components/on-route/on-route";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function BusesOnRoute({buses: serverBuses}) {
    const [buses, setBuses] = useState(serverBuses);
    const [busesOnRoute, setBusesOnRoute] = useState([]);

    useEffect(() => {
        const onRoute = buses.filter(bus => bus.routeId !== null);

        setBusesOnRoute(onRoute);
    }, [buses])

    function searchByLastName(lastName) {
        if (lastName)
            getWithParams('/bus/filter', {driverLastNameStartWith: lastName})
                .then(res => setBuses(res.data))
                .catch(({response}) => console.log(response));
        else
            setBuses(serverBuses);
    }

    function dropRoute(busId) {
        const params = {
            busId
        }

        postWithParams('/action/drop-route', params)
            .then(async () => {
                const response = await getWithParams('/bus', {limit: 10000})
                const data = response.data;

                setBuses(data);
            })
            .catch(({response}) => console.log(response))
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.onRoute} />
            <OnRoute buses={busesOnRoute} onSearchByLastName={searchByLastName} onDropRoute={dropRoute}
                     className={'wrapper__on-route'} />
        </Wrapper>
    )
}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const res = await getWithParams('/bus', params);
    const buses = await res.data;

    return {
        props: {
            buses
        }
    }
}