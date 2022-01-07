import Wrapper from "../../components/wrapper/wrapper";
import {del, getWithParams} from "../../utils/requests";
import Routes from "../../components/routes/routes";
import {useState} from "react";

export default function RoutesPage({routes: serverRoutes}) {
    const [busSufficiency, setBusSufficiency] = useState({});
    const [checkingRouteId, setCheckingRouteId] = useState();

    const [routes, setRoutes] = useState(serverRoutes);

    function deleteRoute(routeId) {
        del(`/route/${routeId}`, {
            id: routeId
        })
            .then((res) => {
                console.log(res.data)
                setRoutes(routes.filter(route => route.id !== routeId))
            })
            .catch(({response}) => {
                console.log("ОШИБКА УДАЛЕНИЯ", response)
            })
    }

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
                    onDeleteRoute={deleteRoute} checkingRouteId={checkingRouteId}
                    onCheckSufficiency={checkSufficiency} />
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