import Wrapper from "../../components/wrapper/wrapper";
import {getWithParams} from "../../utils/requests";
import Routes from "../../components/routes/routes";
import {useState} from "react";

export default function RoutesPage({routes}) {
    const [busSufficiency, setBusSufficiency] = useState({});
    const [checkingRouteId, setCheckingRouteId] = useState();

    async function checkSufficiency(routeId) {
        const res = await fetch(`http://localhost:8080/action/route-inspect/${routeId}`)
        const answer = await res.json();

        const data = {
            busCount: answer.busCount,
            needBusCount: answer.needBusCount
        }

        setBusSufficiency(data);
        setCheckingRouteId(routeId);
    }

    return (
        <Wrapper>
            <Routes routes={routes} className={"wrapper__routes"} busSufficiency={busSufficiency}
                    checkingRouteId={checkingRouteId} onCheckSufficiency={checkSufficiency}/>
        </Wrapper>
    )
}

export async function getStaticProps() {
    const params = {
        limit: 10000
    }

    const res = await getWithParams('/route', params);
    const routes = res.data;

    return {
        props: {
            routes
        }
    }
}