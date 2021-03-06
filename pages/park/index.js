import {getWithParamsRequest} from "../../utils/requests";
import {useEffect, useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import InPark from "../../components/in-park/in-park";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function BusesInPark({serverBuses}) {
    const [buses, setBuses] = useState(serverBuses);
    const [busesInPark, setBusesInPark] = useState([]);

    useEffect(() => {
        const inPark = buses.filter(bus => bus.routeId === null);

        setBusesInPark(inPark);
    }, [buses])

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
            <Header headerTitle={headers.autoPark} />
            <InPark buses={busesInPark} className={'wrapper__in-park'} onSearchByLastName={searchByLastName} />
        </Wrapper>
    )
}

export async function getStaticProps() {
    const resBuses = await getWithParamsRequest('/bus', {limit: 10000});
    const serverBuses = await resBuses.data;

    return {
        props: {
            serverBuses
        }
    }
}