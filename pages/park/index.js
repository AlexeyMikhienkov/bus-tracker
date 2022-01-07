import {getWithParams, postWithParams} from "../../utils/requests";
import {useEffect, useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import InPark from "../../components/in-park/in-park";

export default function BusesInPark({buses: serverBuses}) {
    const [buses, setBuses] = useState(serverBuses);
    const [busesInPark, setBusesInPark] = useState([]);

    useEffect(() => {
        const inPark = buses.filter(bus => bus.routeId === null);

        setBusesInPark(inPark);
    }, [buses])

    return (
        <Wrapper>
            <InPark buses={busesInPark} className={'wrapper__in-park'} />
        </Wrapper>
    )
}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const resBuses = await getWithParams('/bus', params);
    const buses = await resBuses.data;

    return {
        props: {
            buses,
        }
    }
}