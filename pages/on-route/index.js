import {getWithParams, postWithParams} from "../../utils/requests";
import {useEffect, useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import OnRoute from "../../components/on-route/on-route";

export default function BusesOnRoute({buses: serverBuses}) {
    const [buses, setBuses] = useState(serverBuses);
    const [busesOnRoute, setBusesOnRoute] = useState([]);

    useEffect(() => {
        const onRoute = buses.filter(bus => bus.routeId !== null);

        setBusesOnRoute(onRoute);
    }, [buses])

    function dropRoute(busId) {
        //TODO: обработать удаление автобуса с маршрута
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
            <OnRoute buses={busesOnRoute} onDropRoute={dropRoute} className={'wrapper__on-route'} />
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