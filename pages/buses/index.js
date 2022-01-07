import {getWithParams} from "../../utils/requests";
import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";

export default function BusesPage({buses}) {
    const [buses, setBuses] = useState(buses);

    return (
        <Wrapper>
            <Buses />
        </Wrapper>
    )

}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const resBuses = await getWithParams('/bus', params);
    const buses = resBuses.data;

    return {
        props: {
            buses
        }
    }
}