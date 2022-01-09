import Wrapper from "../../components/wrapper/wrapper";
import ChooseRoute from "../../components/choose-route/choose-route";
import {getWithParamsRequest, postWithParamsRequest} from "../../utils/requests";
import {useRouter} from "next/router";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function ChooseRoutePage({serverRoutes, serverBus}) {
    const router = useRouter();

    function setRoute(routeNumber) {
        const busId = router.query.id;

        const chosenRoute = serverRoutes.find(route => route.number === routeNumber);

        const params = {
            busId,
            routeId: chosenRoute.id
        }

        postWithParamsRequest('/action/set-route', params)
            .then(() => {
                router.push('/park');
            })
            .catch(({response}) => console.log(response))
    }

    return (
        <Wrapper>
            <Header headerTitle={headers.chooseRoute} />
            <ChooseRoute className={"wrapper__choose-route"} onSetRoute={setRoute} bus={serverBus} routes={serverRoutes}/>
        </Wrapper>
    )
}

export async function getStaticPaths() {
    const res = await getWithParamsRequest('/bus', {limit: 10000});
    const buses = res.data;

    const paths = buses.map(bus => ({
        params: {id: bus.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const resRoutes = await getWithParamsRequest('/route', {limit: 10000});
    const serverRoutes = await resRoutes.data;

    const res = await fetch(`http://localhost:8080/bus/${params.id}`)
    const serverBus = await res.json()

    return {
        props: {
            serverRoutes,
            serverBus
        }
    }
}