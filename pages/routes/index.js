import Wrapper from "../../components/wrapper/wrapper";
import {getWithParams} from "../../utils/requests";
import Routes from "../../components/routes/routes";

export default function RoutesPage({routes}) {
    function checkSufficiency(routeId) {
        console.log("Проверить достаточность на маршруте", routeId)
    }

    return (
        <Wrapper>
            <Routes routes={routes} className={"wrapper__routes"} onCheckSufficiency={checkSufficiency} />
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