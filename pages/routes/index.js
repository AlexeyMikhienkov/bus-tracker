import Wrapper from "../../components/wrapper/wrapper";
import {deleteRequest, getWithParamsRequest} from "../../utils/requests";
import Routes from "../../components/routes/routes";
import {useState} from "react";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function RoutesPage({serverRoutes}) {
    const [busSufficiency, setBusSufficiency] = useState({});
    const [checkingRouteId, setCheckingRouteId] = useState();

    const [routes, setRoutes] = useState(serverRoutes);
    const [error, setError] = useState({});

    function deleteRoute(routeId) {
        deleteRequest(`/route/${routeId}`, {
            id: routeId
        })
            .then((res) => {
                setError({});
                setRoutes(routes.filter(route => route.id !== routeId))
            })
            .catch(({response}) => {
                if (response.status === 500) {
                    setError({
                        field: "default",
                        message: response.message
                    });
                } else console.log("Другая ошибка", response.status)
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
            <Header headerTitle={headers.routes} />
                <Routes routes={routes} error={error} className={"wrapper__routes"} busSufficiency={busSufficiency}
                        onDeleteRoute={deleteRoute} checkingRouteId={checkingRouteId}
                        onCheckSufficiency={checkSufficiency}/>
        </Wrapper>
    )
}

export async function getStaticProps() {
    const res = await getWithParamsRequest('/route', {limit: 10000});
    const serverRoutes = res.data;

    return {
        props: {
            serverRoutes
        }
    }
}