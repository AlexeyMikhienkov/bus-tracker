import Wrapper from "../../components/wrapper/wrapper";
import CheckFuel from "../../components/check-fuel/check-fuel";
import {getRequest} from "../../utils/requests";
import Header from "../../components/header/header";
import {headers} from "../../constants/constants";

export default function CheckFuelPage({consumptions}) {
    return (
        <Wrapper>
            <Header headerTitle={headers.fuel} />
            <CheckFuel className={"wrapper__check-fuel"} consumptions={consumptions} />
        </Wrapper>
    )
}

export async function getStaticProps() {
    const res = await getRequest('/action/fuel-consumption');
    const consumptions = res.data;

    return {
        props: {
            consumptions
        }
    }
}