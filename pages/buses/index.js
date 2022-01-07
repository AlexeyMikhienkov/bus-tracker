import {getWithParams} from "../../utils/requests";
import {useState} from "react";
import Wrapper from "../../components/wrapper/wrapper";
import Buses from "../../components/buses/buses";

export default function BusesPage({buses}) {
    return (
        <Wrapper>
            <Buses buses={buses} className={"wrapper__buses"} />
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