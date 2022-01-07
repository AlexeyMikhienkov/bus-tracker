import Wrapper from "../../components/wrapper/wrapper";
import ChooseRoute from "../../components/choose-route/choose-route";
import {getWithParams, get, postWithParams} from "../../utils/requests";
import {useRouter} from "next/router";

export default function ChooseRoutePage({routes, bus}) {
    const router = useRouter();

    function setRoute(routeNumber) {
        const busId = router.query.id;

        console.log("current route number", routeNumber)

        const chosenRoute = routes.find(route => route.number === routeNumber);

        const params = {
            busId,
            routeId: chosenRoute.id
        }

        console.log("bus id ", busId, ", route id ", chosenRoute.id)

        postWithParams('/action/set-route', params)
            .then(res => {
                console.log(res)
/*                const response = await getWithParams('/bus', {limit: 10000})
                const data = response.data;

                setBuses(data);*/
            })
            .catch(({response}) => console.log(response))
    }

    return (
        <Wrapper>
            <ChooseRoute className={"wrapper__choose-route"} onSetRoute={setRoute} bus={bus} routes={routes}/>
        </Wrapper>
    )
}

export async function getStaticPaths() {
    const res = await get("/bus");
    const buses = res.data;

    const paths = buses.map(bus => ({
        params: {id: bus.id.toString()},
    }))

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const resRoutes = await getWithParams('/route', {limit: 10000});
    const routes = await resRoutes.data;

    const res = await fetch(`http://localhost:8080/bus/${params.id}`)
    const bus = await res.json()

    return {
        props: {
            routes,
            bus
        }
    }
}